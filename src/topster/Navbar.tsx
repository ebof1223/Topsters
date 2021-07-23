import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './topster-styles/NavbarStyles';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ToggleBookmarkSnackBar from './ToggleBookmarkSnackBar';
import { TopsterTemplate } from '../interface';
import { Alert } from '@material-ui/lab';
import ToggleBookmarkExceededSnackBar from './ToggleBookmarkExceededSnackBar';

// import BookmarksExceededModal from '../../BookmarksExceededModal';

interface Props {
  classes: {
    Navbar: string;
    Title: string;
    Icon: string;
    IconOn: string;
  };
  title: string;
  history: { push: (input: string) => void };
  id: string;
  type?: string;
  bookmarks?: TopsterTemplate[];
  setBookmarks?: (i: TopsterTemplate[]) => void;
  recommended?: TopsterTemplate[];
}
const Navbar: React.FC<Props> = ({
  classes,
  title,
  id,
  history,
  bookmarks,
  setBookmarks,
  recommended,
}) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openExceededError, setOpenExceededError] = useState(false);
  const currentBookmark = recommended
    ? recommended.findIndex((item: { id: string }) => item.id === id)
    : null;
  const [isBookmarked, setIsBookmarked] = useState(
    bookmarks ? recommended[currentBookmark].bookmarked : null
  );

  useEffect(() => {
    if (!bookmarks) return;
    let currentRecommendedTopster = recommended[currentBookmark];
    currentRecommendedTopster.bookmarked = isBookmarked;
    if (isBookmarked) {
      if (bookmarks.every((item) => item.id !== currentRecommendedTopster.id)) {
        setBookmarks([...bookmarks, currentRecommendedTopster]);
      }
    }
    if (!isBookmarked) {
      for (let [index, item] of bookmarks.entries()) {
        if (currentRecommendedTopster.id === item.id) {
          bookmarks.splice(index, 1);
          setBookmarks(bookmarks);
          break;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBookmarked]);

  const handleBookmarkToggle = () => {
    if (!isBookmarked && bookmarks.length > 8) {
      setOpenExceededError(true);
      return;
    }
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      setOpenSnackBar(true);
    }
  };

  const topRightIcon = () => {
    const url = window.location.href;
    if (url.includes('topsters'))
      return (
        <Tooltip title="Edit">
          <EditIcon
            className={classes.Icon}
            onClick={() => {
              history.push(`/topsters/edit/${id}`);
            }}
          />
        </Tooltip>
      );
    if (url.includes('recommended'))
      return (
        <Tooltip title={isBookmarked ? 'Unlike' : 'Like'}>
          <FavoriteIcon
            className={isBookmarked ? classes.IconOn : classes.Icon}
            onClick={handleBookmarkToggle}
          />
        </Tooltip>
      );
    return (
      <div
        style={{
          height: '40px',
          width: '50px',
          backgroundColor: '#fff',
          opacity: 0,
          marginLeft: '1.4rem',
        }}
      />
    );
  };

  return (
    <>
      <ToggleBookmarkSnackBar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
      />
      <ToggleBookmarkExceededSnackBar
        openExceededError={openExceededError}
        setOpenExceededError={setOpenExceededError}
      />
      <header className={classes.Navbar}>
        <Link to={'/home'}>
          <Tooltip title="Home">
            <HomeIcon
              style={{ marginLeft: '3rem', cursor: 'pointer', color: 'black' }}
            />
          </Tooltip>
        </Link>
        <div className={classes.Title}>
          <h3>{title}</h3>
        </div>
        {topRightIcon()}
      </header>
    </>
  );
};

export default withStyles(styles)(Navbar);
