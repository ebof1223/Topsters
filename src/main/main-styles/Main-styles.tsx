import { createStyles } from '@material-ui/styles';
import sizes from '../../sizes';

const styles = createStyles({
  '@global': {
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  root: {
    backgroundColor: 'rgb(23,23,26)',
    fontFamily: 'Lexend, sans-serif',
    width: '100vw',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '12% 38% 50%',
    // gridTemplateColumns: '1fr 2fr 10fr',
    padding: '0 10%',
  },
  BackButton: {
    color: 'white',
    gridColumn: '1/5',
    marginTop: '2rem',
  },
});

export default styles;
