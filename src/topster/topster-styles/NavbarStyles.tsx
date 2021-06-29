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
    margin: '-0.5rem',
    '& h3': {
      fontFamily: 'Lexend, sans-serif',
      fontWeight: '300',
      fontSize: '2rem',
    },
  },
  Icon: { marginRight: '3rem', cursor: 'pointer', color: 'black' },
});

export default styles;
