import { createStyles } from '@material-ui/styles';
import sizes from '../../sizes';

const styles = createStyles({
  sectionWrapper: {
    gridColumn: '2/3',
    [sizes.down('xs')]: {
      gridArea: 'topsters',
    },
    '@media all and (width: 667px) and (height: 375px)': {
      gridArea: 'topsters',
    },
  },
  topsterTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    [sizes.down('xs')]: {
      justifyContent: 'center',
    },
  },
  topstersTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    fontSize: '2rem',
    [sizes.down('xs')]: {
      alignItems: 'center',
    },
    '@media all and (width: 667px) and (height: 375px)': {
      margin: '0 auto',
    },
  },
  Fab: {
    marginLeft: '1rem',
    [sizes.down('xs')]: {
      display: 'none',
    },
    '@media all and (width: 667px) and (height: 375px)': {
      display: 'none',
    },
  },
  TopstersSection: {
    overflow: 'auto',
    height: '400px',
    [sizes.down('xs')]: {
      display: 'none',
    },
    '@media all and (width: 667px) and (height: 375px)': {
      display: 'none',
    },
  },

  UserTopsters: {
    display: 'flex',
    flexWrap: 'wrap',
    scrollSnapType: 'y mandatory',
    scrollSnapAlign: 'start',
  },
});

export default styles;
