import { createStyles } from '@material-ui/styles';

import sizes from '../../../../../../App/Constants/sizes';

const styles = createStyles({
  root: {
    boxSizing: 'border-box',
    padding: '0.5rem',
  },
  card: {
    cursor: 'pointer',
    background:
      'linear-gradient(to top right,rgba(100, 213, 251, 0.3),rgba(228, 166, 249, 0.5)) fixed',
    '&:hover': {
      filter: 'brightness(120%) saturate(120%)',
    },
    [sizes.down('xl')]: {
      transform: 'scale(0.9)',
    },
    [sizes.down('lg')]: {
      transform: 'scale(0.8)',
    },
    [sizes.down('md')]: {
      transform: 'scale(0.75)',
    },
    [sizes.down('xs')]: { transform: 'scale(0.5)' },
  },
  topsterGrid: {
    display: 'grid',
    position: 'relative',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'repeat(3, 1fr)',
    background: 'white',
    width: '252px',
    border: '4px solid #91a7ff',
    borderRadius: '5px 5px 0 0',
    transition: 'all 0.3s ease',
  },
  FavoriteIcon: {
    zIndex: 10,
    position: 'absolute',
    left: '83%',
    top: '2%',
    cursor: 'pointer',
  },
  title: {
    fontFamily: 'Lexend, sans-serif',
    fontWeight: 500,
    color: '#fff',
    fontSize: '1.1rem',
    marginRight: '10px',
    paddingTop: '1rem',
    padding: '4rem 1rem',
    textAlign: 'left',
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
  PlayIcon: {
    position: 'absolute',
    color: 'rgb(252,252,252)',
    bottom: '-1.5rem',
    right: 0,
    marginRight: '1rem',
    marginTop: '10rem',
    overflow: 'auto',
  },
});
export default styles;
