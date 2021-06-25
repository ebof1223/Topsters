import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  Navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    minWidth: '100%',
    padding: '0.75rem 2rem',
    fontFamily: 'Lexend, sans-serif',
  },
  Title: {
    fontSize: '2rem',
    margin: '-0.5rem',
  },
});

export default styles;
