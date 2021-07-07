import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './topster-styles/NavbarStyles';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
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
  type,
  bookmarks,
  setBookmarks,
  recommended,
}) => {
  //look if item is in local str, and if it is, use that bookmarked value
  const [isBookmarked, setIsBookmarked] = useState(
    bookmarks
      ? recommended[
          recommended.findIndex((item: { id: string }) => item.id === id)
        ].bookmarked
      : null
  );
  const [openSnackBar, setOpenSnackBar] = useState(false);

  useEffect(() => {
    console.log('one time use effect');
    let localStorageBookmarks = JSON.parse(
      window.localStorage.getItem('bookmarks')
    );
    if (localStorageBookmarks.length) {
      for (let lsItem of localStorageBookmarks) {
        recommended.map((recItem) => {
          if (lsItem.id === recItem.id) {
            recItem.bookmarked = lsItem.bookmarked;
            console.log('match!', recItem.bookmarked);
          }
        });
      }
      console.log('this is recommended', recommended);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('the other useEffect');
    if (!bookmarks) return;
    isBookmarked && setOpenSnackBar(true);
    let currentRecommendedTopster =
      recommended[
        recommended.findIndex((item: { id: string }) => item.id === id)
      ];
    //this is the problem. its changing the bookmark state of the current topster
    currentRecommendedTopster.bookmarked = isBookmarked;
    setBookmarks(recommended.filter((item: any) => item.bookmarked));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBookmarked]);

  const handleEdit = () => {
    history.push(`/topsters/edit/${id}`);
  };

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <>
      <ToggleBookmarkSnackBar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
      />
      <header className={classes.Navbar}>
        <Link to={'/home'}>
          <HomeIcon
            style={{ marginLeft: '3rem', cursor: 'pointer', color: 'black' }}
          />
        </Link>
        <div className={classes.Title}>
          <h3>{title}</h3>
        </div>
        {type === 'topsters' ? (
          <EditIcon className={classes.Icon} onClick={handleEdit} />
        ) : (
          <BookmarksIcon
            className={isBookmarked ? classes.IconOn : classes.Icon}
            onClick={handleBookmarkToggle}
          />
        )}
      </header>
    </>
  );
};

export default withStyles(styles)(Navbar);
