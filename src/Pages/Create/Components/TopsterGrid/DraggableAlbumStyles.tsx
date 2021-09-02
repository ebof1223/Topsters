import { createStyles } from '@material-ui/styles';
// import sizes from './sizes';

const styles = createStyles({
  root: {
    boxSizing: 'border-box',
    width: '250px',
    height: '250px',
    position: 'relative',
    margin: '0 auto',
    cursor: 'grab',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#AAA',
    borderRadius: '1px',
    '&:active': {
      cursor: 'none',
    },
    // [sizes.down('lg')]: {
    //   width: '25%',
    //   height: '20%',
    // },
    // [sizes.down('md')]: {
    //   width: '50%',
    //   height: '10%',
    // },
    // [sizes.down('s')]: {
    //   width: '100%',
    //   height: '5%',
    // },
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
  links: {
    position: 'absolute',
    display: 'inline-block',
    margin: '0 auto',
    bottom: 0,
    right: 0,
    opacity: 1,
    marginRight: '0.25rem',
    marginBottom: '0.25rem',
    zIndex: 10,
    '&:hover svg': {
      color: 'white',
      transition: '0.5s',
      transform: 'scale(1.2)',
      cursor: 'pointer',
    },
  },
});
export default styles;
