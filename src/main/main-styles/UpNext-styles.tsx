import { createStyles } from '@material-ui/styles';
import sizes from '../../sizes';
const styles = createStyles({
  AOTDContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'repeat(3, 1fr)',
    borderRadius: '5px',
    border: '3px solid #91a7ff',
    width: '400px',
    marginLeft: '5rem',
    cursor: 'pointer',
    position: 'relative',
    '&:focus, &:hover': {
      filter: 'brightness(115%) saturate(100%)',
    },
    [sizes.down('lg')]: {
      width: '60%',
    },
    [sizes.down('md')]: {
      padding: 0,
      margin: '2rem auto 2rem auto',
      transform: 'scale(0.70)',
      width: '1000px',
    },
    [sizes.down('xs')]: {
      marginTop: '-2.5rem',
      marginRight: '1.5rem',
    },
  },
  AOTDContainerEmpty: {
    borderRadius: '5px',
    border: '3px solid #91a7ff',
    width: '400px',
    height: '400px',
    marginLeft: '5rem',
    cursor: 'pointer',
    position: 'relative',
    textAlign: 'center',
    [sizes.down('lg')]: {
      width: '60%',
    },
    [sizes.down('md')]: {
      padding: 0,
      margin: '2rem auto 2rem auto',
      transform: 'scale(0.70)',
      width: '1000px',
    },
    [sizes.down('xs')]: {
      height: '250px',
    },
  },
  CompareArrowsIcon: {
    position: 'absolute',
    left: '85%',
    top: '2%',
    zIndex: 10,
    fontSize: '50px',
    color: '#91a7ff',
    borderRadius: '15px',
    [sizes.down('xs')]: {
      left: '75%',
    },
  },
  firstBookmarkedItem: {
    height: '131.5px',
    display: 'block ruby',
    [sizes.down('xs')]: {
      height: '70px',
    },
  },

  noBookmarks: {
    marginTop: '40%',
    fontSize: '2rem',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'inherit',
  },
});

export default styles;
