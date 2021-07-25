import { createStyles } from '@material-ui/styles';
import sizes from '../../sizes';

const styles = createStyles({
  Navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    minWidth: '100%',
    padding: '0.75rem 2rem',
    fontFamily: 'Lexend, sans-serif',
    marginTop: '0.5rem',
  },
  Title: {
    '& h3': {
      fontFamily: 'Lexend, sans-serif',
      fontWeight: '300',
      fontSize: '2rem',
      [sizes.down('md')]: { fontSize: '1.5rem' },
      [sizes.down('xs')]: { fontSize: '0.8rem' },
    },
  },
  Icon: { marginRight: '3rem', cursor: 'pointer', color: 'black' },
  IconOn: {
    marginRight: '3rem',
    cursor: 'pointer',
    color: '#91a7ff',
  },
});

export default styles;
