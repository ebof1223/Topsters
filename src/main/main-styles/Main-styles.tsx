import { createStyles } from '@material-ui/styles';
import sizes from '../../sizes';

const styles = createStyles({
  '@global': {
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  root: {
    backgroundColor: 'rgb(23,23,26)',
    fontFamily: 'Lexend, sans-serif',
    width: '100vw',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 3fr 1fr',
    gridTemplateRows: '1fr 3fr 3fr 1fr',
    padding: '0 10%',
    [sizes.down('xs')]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 2fr 1fr 1fr',
      gridTemplateAreas: `
      "backbtn"
      "recommended"
      "topsters"
      "bookmarks"
      `,
    },
    // iphone 6/7/8
    '@media all and (width: 667px) and (height: 375px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr',
      gridTemplateAreas: `
      "backbtn"
      "recommended"
      "topsters"
      "bookmarks"
      `,
    },
  },
  BackButton: {
    color: 'white',
    gridColumn: '1/5',
    marginTop: '2rem',
    [sizes.down('xs')]: {
      gridArea: 'backbtn',
    },
    '@media all and (width: 667px) and (height: 375px)': {
      gridArea: 'backbtn',
    },
  },
});

export default styles;
