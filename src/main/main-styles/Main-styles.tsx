import { createStyles } from '@material-ui/styles';
import sizes from '../../sizes';

const styles = createStyles({
  '@global': {
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  BackButton: {
    color: 'white',
    position: 'relative',
    top: 10,
    margin: '1rem 0',
  },
  root: {
    backgroundColor: 'rgb(23,23,26)',
    height: '100%',
    display: 'flex',
    alignContent: 'flex-start',
    justifyContent: 'center',
    overflow: 'none',
    width: '100%',
  },
  heading: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '3rem',
    marginBottom: '3rem',
  },
  OuterContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: 'red',
    [sizes.down('xl')]: {
      width: '1210px',
    },
    [sizes.down('lg')]: {
      width: '940px',
    },
    [sizes.down('md')]: {
      width: '670px',
    },
    [sizes.down('xs')]: {
      width: '410px',
    },
    // [sizes.down('sm')]: {
    //   width: '60%',
    // },
  },

  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    padding: '3rem 0 4rem 0',
    flexDirection: 'row',
  },
  RecommendedTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
  RecommendedTitleContainer: { display: 'flex' },
  RecommendedTopsters: {
    margin: '2rem auto',
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'row',
    overflow: 'hidden',
    scrollSnapType: 'x mandatory',
    width: '83.75rem',
    scrollbarWidth: 'none',
    alignItems: 'center',
    // [sizes.down('xl')]: {
    //   minWidth: '1100px',
    // },
    // [sizes.down('lg')]: {
    //   width: '87.5%',
    // },

    // [sizes.down('md')]: {
    //   gridTemplateColumns: 'repeat(2, 0%)',
    // },
    // [sizes.down('xs')]: {
    //   gridTemplateColumns: 'repeat(1, 100%)',
    //   gridGap: '1.4rem',
    // },
  },

  RecommendedContainer: {
    display: 'flex',
    alignItems: 'center',
    background: 'yellow',
    // margin: '0 2rem',
    [sizes.down('xl')]: {
      width: '100%',
    },
    // [sizes.down('lg')]: {
    //   width: '70%',
    // },
  },
  RecommendedSection: {
    display: 'flex',
    flexDirection: 'row',
    scrollSnapType: 'x mandatory',
    scrollSnapAlign: 'start',
  },
  recommendedArrowVisible: {
    fontSize: '70px',
    cursor: 'pointer',
  },
  recommendedArrowHidden: {
    fontSize: '70px',
    opacity: '0.2',
    pointerEvents: 'none',
  },
  UserTopsters: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    overflowX: 'hidden',
    scrollbarWidth: 'none',
    // scrollSnapType: 'y mandatory',
    height: '400px',
    width: '800px',
    [sizes.down('xl')]: {
      width: '48%',
    },
    // [sizes.down('lg')]: {
    //   width: '57%',
    // },
  },
  topstersSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    scrollSnapType: 'y mandatory',
    scrollSnapAlign: 'start',
  },
  subMain: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem auto',
  },

  AOTDTitleContainer: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
  topsterScrollIconOn: {
    position: 'relative',
    marginLeft: '35%',
    '&:hover': {
      transform: 'scale(2)',
      cursor: 'pointer',
    },
  },
  topsterScrollIconOff: {
    position: 'relative',
    marginLeft: '35%',
    opacity: 0,
  },
});

export default styles;
