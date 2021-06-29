import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  root: {
    boxSizing: 'border-box',
    padding: '0.5rem',
    margin: '-1rem -3rem',
  },
  card: {
    cursor: 'pointer',
    transform: 'scale(0.6)',
  },
  topsterGrid: {
    display: 'grid',
    position: 'relative',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'repeat(3, 1fr)',
    background: 'white',
    width: '251px',
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
    width: '81.5px',
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
