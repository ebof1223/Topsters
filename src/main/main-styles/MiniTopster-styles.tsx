import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  root: {
    boxSizing: 'border-box',
    padding: '0.5rem',
  },
  card: {
    display: 'grid',
    position: 'relative',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'repeat(3, 1fr)',
    background: 'white',
    width: '250px',
    border: '.2rem solid #91a7ff',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-15px)',
      transition: 'all 0.1s ease',
      cursor: 'pointer',
    },
  },

  title: {
    fontFamily: 'Lexend, sans-serif',
    fontSize: '1rem',
    display: 'block ruby',
    paddingTop: '1rem',
  },
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
