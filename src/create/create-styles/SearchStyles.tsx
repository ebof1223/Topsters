import { createStyles } from '@material-ui/core';
import sizes from '../../sizes';

const styles = () =>
  createStyles({
    '@keyframes fill': {
      '0%': {
        width: '100%',
      },
      '100%': {
        width: '0%',
      },
    },
    root: { position: 'static' },
    Overlay: {
      pointerEvents: 'none',
      position: 'absolute',
      bottom: 0,
      right: '35%',
      top: '50%',
      zIndex: 10,
    },
    SearchBar: {
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.65)',
      width: '23vw',
      height: '10vh',
      borderRadius: '2px',
      padding: '1rem 2rem',
      border: 1,
      fontSize: '4rem',
      textAlign: 'center',
      outline: 'none',
      borderTop: '5px solid rgba(225,225,225, 0.2)',
      borderLeft: '5px solid rgba(225,225,225, 0.1)',
      borderRight: 'alignSelf 3px solid rgba(225,225,225, 0.3)',
    },
    ProgressBar: {
      height: '5px',
    },
    Hide: {
      display: 'none',
    },
    fill: {
      height: '100%',
      animation: '$fill 3s linear',
      borderRadius: '5px',
      backgroundColor: 'red',
    },
    searchBarXSContainer: {
      [sizes.down('xs')]: {
        position: 'absolute',
        left: '16.5%',
        top: '15%',
        zIndex: 5,
      },
    },
    searchBarXS: {
      [sizes.down('xs')]: {
        width: '300px',
        display: 'flex',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        padding: '1rem 2rem',
        fontSize: '4rem',
        textAlign: 'center',
        outline: 'none',
        borderTop: '5px solid rgba(225,225,225, 0.2)',
        borderLeft: '5px solid rgba(225,225,225, 0.1)',
        borderRight: 'alignSelf 3px solid rgba(225,225,225, 0.3)',
      },

      // display:'none'
    },
    searchBarXSBtn: {
      width: '300px',
    },
  });

export default styles;
