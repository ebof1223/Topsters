import { createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: { position: 'static' },
    SearchBar: {
      width: '23vw',
      height: '10vh',
      borderRadius: '2px',
      padding: '1rem 2rem',
      border: '5px solid red',
      fontSize: '4rem',
      // pointerEvents: 'none',
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
      right: '35%',
      top: '50%',
      zIndex: 10,
      '& focus': {
        opacity: 0.7,
        outline: 'none',
      },

      // opacity: 0,
    },
  });

export default styles;
