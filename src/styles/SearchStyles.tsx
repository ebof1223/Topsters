import { createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: { position: 'static' },

    resultsContainer: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flexStart',
      margin: '0.2rem 0',
      paddingLeft: '1.5rem',
      overflow: 'auto',
      scrollSnapType: 'y mandatory',
    },
    SearchBar: {
      // width: '23vw',
      // height: '10vh',
      // borderRadius: '2px',
      // padding: '1rem 2rem',
      // border: '5px solid red',
      // fontSize: '4rem',
      // // pointerEvents: 'none',
      // textAlign: 'center',
      // position: 'absolute',
      // '& focus': {
      //   opacity: 0.7,
      //   outline: 'none',
      // },
      // // opacity: 0,
    },
  });
export default styles;
