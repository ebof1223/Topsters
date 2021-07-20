import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  root: {
    backgroundColor: 'rgb(23,23,26)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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
  },
  PriorityText: {
    color: '#fff',
  },
  BackButton: {
    color: 'white',
    position: 'relative',
    cursor: 'pointer',
    top: 10,
    left: 25,
  },
});

export default styles;
