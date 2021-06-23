import { createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    '@keyframes fill': {
      '0%': {
        width: '0%',
      },
      '100%': {
        width: '100%',
      },
    },
    root: { position: 'static' },
    Overlay: {
      // pointerEvents: 'none',
      position: 'absolute',
      bottom: 0,
      right: '35%',
      top: '50%',
      zIndex: 10,
    },
    SearchBar: {
      backgroundColor: 'yellow',
      backdropFilter: 'blur(100px)',
      width: '23vw',
      height: '10vh',
      borderRadius: '2px',
      padding: '1rem 2rem',
      border: '5px solid red',
      fontSize: '4rem',
      textAlign: 'center',
      outline: 'none',
      // '& focus': {
      //   opacity: 0.7,
      // },
    },
    ProgressBar: {
      height: '5px',
      width: '100%',
    },
    Hide: {
      display: 'none',
    },
  });

export default styles;
