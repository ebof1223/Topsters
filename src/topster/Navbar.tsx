import React from 'react';
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
  };
  title: string;
  history: { push: (input: string) => void };
  id: string;
  type?: string;
}

const Navbar: React.FC<Props> = ({ classes, title, id, history, type }) => {
  const handleEdit = () => {
    history.push(`/topsters/edit/${id}`);
  };

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
        <BookmarksIcon className={classes.Icon} />
      )}
    </header>
  );
};

export default withStyles(styles)(Navbar);
