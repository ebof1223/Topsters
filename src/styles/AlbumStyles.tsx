import sizes from './sizes';
import { createStyles } from '@material-ui/styles';
const styles = createStyles({
  Album: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-3.5px',
    '&:hover div': {
      opacity: 1,
      transition: '0.5s',
    },
    [sizes.down('lg')]: {
      width: '25%',
    },
    [sizes.down('md')]: {
      width: '50%',
    },
    [sizes.down('xs')]: {
      width: '100%',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    padding: ' 10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '0.7rem',
  },
});
export default styles;
