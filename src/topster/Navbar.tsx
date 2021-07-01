import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './topster-styles/NavbarStyles';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import BookmarksIcon from '@material-ui/icons/Bookmarks';

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
  bookmarks?: [];
  setBookmarks?: any;
  recommended?: any;
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
  var initial = bookmarks.some((item: any) => item.id === id);
  const [bookmarkSaved, setBookmarkSaved] = useState(initial);

  useEffect(() => {
    let current: any[];
    if (bookmarkSaved) {
      current = recommended.filter((item: { id: string }) => item.id === id);
      // console.log(...current);
      // console.log('before merge', bookmarks);
      setBookmarks([...current]);
      //need rerender here to update the bookmark state
    } else {
      current = bookmarks.filter((item: { id: string }) => item.id !== id);
      setBookmarks([...current]);
    }
  }, [bookmarkSaved]);

  console.log(bookmarks);
  const handleEdit = () => {
    history.push(`/topsters/edit/${id}`);
  };

  // if id is not in book marks, add it, turn icon purple, turn saved modal notification on
  return (
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
          className={bookmarkSaved ? classes.IconOn : classes.Icon}
          onClick={() => setBookmarkSaved(!bookmarkSaved)}
        />
      )}
    </header>
  );
};

export default withStyles(styles)(Navbar);
