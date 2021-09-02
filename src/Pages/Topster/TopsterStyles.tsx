import { createStyles } from '@material-ui/core';
import sizes from '../../../App/Constants/sizes';

const styles = createStyles({
  Topster: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(47,48,52)',
    position: 'fixed',
    inset: '4rem',
    fontFamily: 'Lexend, sans-serif',
  },

  LeftPanel: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    bottom: '50%',
    marginLeft: '1rem',
    cursor: 'pointer',
    '& h3': {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Lexend, sans-serif',
      transform: 'rotate(-90deg)',
      fontSize: '2rem',
      width: '15vw',
      alignItems: 'center',
      marginLeft: '-8rem',
      fontWeight: '300',
    },
  },

  RightPanel: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    right: 0,
    bottom: '50%',
    marginRight: '1rem',
    cursor: 'pointer',
    '& h3': {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Lexend, sans-serif',
      fontWeight: '300',
      transform: 'rotate(-270deg)',
      fontSize: '2rem',
      width: '15vw',
      alignItems: 'center',
      marginRight: '-8rem',
    },
  },

  Description: {
    '& h1': {
      fontFamily: 'Lexend, sans-serif',
      fontWeight: '900',
      fontSize: '2rem',
      marginLeft: '2rem',
    },
    '& h2': {
      fontSize: '1.5rem',
      fontWeight: '500',
      marginLeft: '2rem',
    },
    '& ol': {
      marginTop: '3rem',
      lineHeight: '2rem',
      marginLeft: '2rem',
      listStylePosition: 'inside',
      overflow: 'auto',
    },
    fontFamily: 'Lexend, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    color: 'rgb(255,255,255)',
    marginRight: '5rem',
    width: '25vw',
    height: '65vh',
    behavior: 'smooth',
    [sizes.down('xl')]: { width: '30vw', height: '50vh' },
    [sizes.down('lg')]: { width: '30vw', marginRight: '0' },
    [sizes.down('md')]: { display: 'none' },
  },
  TopsterContainer: {
    background: 'rgb(255,255,255)',
    marginRight: '2rem',
    padding: '0.5rem',
    borderRadius: '2px',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    [sizes.down('lg')]: { transform: 'scale(0.65)', marginRight: '-6rem' },
    [sizes.down('md')]: { transform: 'scale(0.45)', margin: '0 auto' },
  },

  Albums: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 250px)',
    gridTemplateRows: 'repeat(3, 250px)',
    background: 'rgb(255,255,255)',
    zIndex: 2,
  },
  record: {
    position: 'absolute',
    right: 0,
    marginRight: '5%',
    height: '750px',
    [sizes.down('xl')]: { marginRight: '2%' },
    [sizes.down('lg')]: { display: 'none' },
  },
});

export default styles;
