import { createStyles } from '@material-ui/styles';
// import sizes from '../../styles/sizes';

const styles = createStyles({
  '@global': {
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },

  root: {
    backgroundColor: 'rgb(23,23,26)',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  heading: {
    fontFamily: 'Lexend, sans-serif',
    fontSize: '3rem',
    marginBottom: '3rem',
  },
  OuterContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    // [sizes.down('xl')]: {
    //   width: '80%',
    // },
    // [sizes.down('xs')]: {
    //   width: '75%',
    // },
  },

  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    padding: '1rem 0 4rem 0',
  },

  topsters: {
    marginTop: '2rem',
    display: 'flex',
    boxSizing: 'border-box',
    // width: '100%',
    // height: 'calc(100vh - 4rem)',
    //   [sizes.down('md')]: {
    //     // gridTemplateColumns: 'repeat(2, 50%)',
    //   },
    //   [sizes.down('xs')]: {
    //     // gridTemplateColumns: 'repeat(1, 100%)',
    //     gridGap: '1.4rem',
    //   },
  },
});

export default styles;
