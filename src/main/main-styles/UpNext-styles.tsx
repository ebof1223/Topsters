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
    [sizes.down('lg')]: {
      width: '60%',
    },
    [sizes.down('md')]: {
      width: '100%',
    },
    [sizes.down('md')]: {
      padding: 0,
      margin: '2rem auto 2rem auto',
      transform: 'scale(0.70)',
      width: '1000px',
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
  },
  CompareArrowsIcon: {
    position: 'absolute',
    left: '85%',
    top: '2%',
    zIndex: 10,
    fontSize: '50px',
    color: '#91a7ff',
    borderRadius: '15px',
  },
  firstBookmarkedItem: {
    height: '131.5px',
    display: 'block ruby',
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
