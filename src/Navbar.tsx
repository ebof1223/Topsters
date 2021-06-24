import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NavbarStyles';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import { ToppingsStructure } from './interface';

interface Props {
  classes: {
    Navbar: string;
    Title: string;
  };
  title: string;
  toppings: ToppingsStructure[];
  history: { push: (input: string) => void };
  id: string;
}

const Navbar: React.FC<Props> = ({ classes, title, id, history }) => {
  const handleEdit = () => {
    history.push(`/toppings/edit/${id}`);
  };

  return (
    <header className={classes.Navbar}>
      <Link to={'/'}>
        <HomeIcon
          style={{ marginLeft: '3rem', cursor: 'pointer', color: 'black' }}
        />
      </Link>
      <div className={classes.Title}>{title}</div>
      <EditIcon
        style={{ marginRight: '3rem', cursor: 'pointer', color: 'black' }}
        onClick={handleEdit}
      />
    </header>
  );
};

export default withStyles(styles)(Navbar);
