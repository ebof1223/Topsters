import { createStyles } from '@material-ui/styles';
import sizes from '../../App/Constants/sizes';

const styles = createStyles({
  root: {
    backgroundColor: 'rgb(23,23,26)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
  PriorityContainer: {
    alignSelf: 'center',
    position: 'relative',
    marginTop: '10rem',
    display: 'flex',
    justifyContent: 'space-between',
    width: '150px',
    alignItems: 'center',
    '& h2': {
      color: 'rgb(52,75,168)',
      fontWeight: '500',
      fontFamily: 'Lexend, sans-serif',
    },
    [sizes.down('xs')]: {
      marginBottom: '-7rem',
      marginTop: '0rem',
      marginRight: '1rem',
    },
  },
  PriorityText: {
    color: '#fff',
  },
  BackButton: {
    color: 'white',
    position: 'relative',
    cursor: 'pointer',
    padding: '1rem',
  },
});

export default styles;
