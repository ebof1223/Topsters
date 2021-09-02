import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  root: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '200px',
  },

  card: {
    cursor: 'pointer',
    height: '200px',
    transform: 'scale(0.65)',
    '&:focus, &:hover': {
      filter: 'brightness(115%) saturate(100%)',
    },
  },
  topsterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'repeat(3, 1fr)',
    position: 'relative',
    background: 'white',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    border: '3px solid #91a7ff',
  },
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
