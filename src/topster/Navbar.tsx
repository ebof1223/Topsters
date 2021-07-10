import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './topster-styles/NavbarStyles';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ToggleBookmarkSnackBar from '../ToggleBookmarkSnackBar';
import { TopsterTemplate } from '../interface';

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

  const [isBookmarked, setIsBookmarked] = useState(
    bookmarks
      ? recommended[
          recommended.findIndex((item: { id: string }) => item.id === id)
        ].bookmarked
      : null
  );

  useEffect(() => {
    if (!bookmarks) return;
    let currentRecommendedTopster =
      recommended[
        recommended.findIndex((item: { id: string }) => item.id === id)
      ];
    currentRecommendedTopster.bookmarked = isBookmarked;
    setBookmarks(recommended.filter((item: any) => item.bookmarked));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBookmarked]);

  const handleEdit = () => {
    history.push(`/topsters/edit/${id}`);
  };

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      setOpenSnackBar(true);
    }
  };
  return (
    <>
      <ToggleBookmarkSnackBar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
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
        {window.location.href.includes('topster') && (
          <Tooltip title="Edit">
            <EditIcon className={classes.Icon} onClick={handleEdit} />
          </Tooltip>
        )}
        {(window.location.href.includes('recommended') ||
          window.location.href.includes('bookmarks')) && (
          <Tooltip title={isBookmarked ? 'Unlike' : 'Like'}>
            <FavoriteIcon
              className={isBookmarked ? classes.IconOn : classes.Icon}
              onClick={handleBookmarkToggle}
            />
          </Tooltip>
        )}
        {/* change handlebookmark toggle to return back to bookmarks page if user unlikes topster */}
        {/* {window.location.href.includes('bookmarks') && <FavoriteIcon />} */}
      </header>
    </>
  );
};

export default withStyles(styles)(Navbar);
