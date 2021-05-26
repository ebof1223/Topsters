import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styles from './styles/NavbarStyles';

interface Props {
  classes: {
    Navbar: string;
    logo: string;
  };
}

const Navbar: React.FC<Props> = ({ classes }) => {
  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          Toppings
        </Link>
      </div>
      <Link to={'/'} style={{ textDecoration: 'none', marginLeft: '2rem' }}>
        <Button variant="contained" color="secondary" type="submit">
          Go Back
        </Button>
      </Link>
      <Button variant="contained" color="primary">
        Edit
      </Button>
    </header>
  );
};

export default withStyles(styles)(Navbar);
