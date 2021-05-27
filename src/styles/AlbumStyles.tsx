import sizes from './sizes';
import { createStyles } from '@material-ui/styles';
const styles = createStyles({
  Album: {
    background: '#444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#AAA',
    margin: '0.4rem 0.3rem',
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
  // boxContent: {
  //   position: 'absolute',
  //   width: '100%',
  //   left: 0,
  //   bottom: 0,
  //   padding: ' 10px',
  //   color: 'black',
  //   letterSpacing: '1px',
  //   textTransform: 'uppercase',
  //   fontSize: '0.7rem',
  // },
});
export default styles;
