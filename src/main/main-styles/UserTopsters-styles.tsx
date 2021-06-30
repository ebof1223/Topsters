import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  root: {
    boxSizing: 'border-box',
    // margin: '-2rem -1rem -2rem -1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '200px',
    scrollSnapType: 'y mandatory',
    scrollSnapAlign: 'start',
  },

  card: {
    cursor: 'pointer',
    transform: 'scale(0.65)',
  },
  topsterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'repeat(3, 1fr)',
    position: 'relative',
    background: 'white',
    // width: '251px',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    border: '3px solid #91a7ff',
  },
  // title: {
  //   fontFamily: 'Lexend, sans-serif',
  //   fontWeight: 500,
  //   color: '#fff',
  //   fontSize: '1.5rem',
  //   width: '100%',
  //   paddingTop: '1rem',
  //   display: 'block',
  //   overflow: 'auto',
  //   padding: '4rem 1rem',
  // },
  MiniTopsters: {
    height: '72px',
    width: '72px',
    display: 'block ruby',
    position: 'relative',
    padding: '1rem',
  },
  deleteIcon: {
    zIndex: 1,
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '25px',
    height: '25px',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '5px',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
    borderRadius: '5px',
    '&:hover': {
      opacity: 1,
    },
  },
});
export default styles;
