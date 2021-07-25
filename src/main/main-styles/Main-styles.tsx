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
  OuterContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
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
      transform: 'scale(0.9)',
    },
  },

  RecommendedTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
  RecommendedTitleContainer: {
    marginTop: '1rem',
    display: 'flex',
    [sizes.down('xs')]: {
      margin: 'auto',
      marginTop: '-2rem',
    },
  },
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
    [sizes.down('xs')]: {
      margin: 'auto',
      marginTop: 0,
    },
  },

  RecommendedContainer: {
    display: 'flex',
    alignItems: 'center',
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
    height: '400px',
    width: '800px',
    [sizes.down('xl')]: {
      width: '475px',
    },
    [sizes.down('lg')]: {
      marginLeft: '2rem',
      width: '553px',
    },
    [sizes.down('md')]: {
      padding: 0,
      margin: 'auto',
      transform: 'scale(0.85)',
      // width: '1100px',
    },
  },
  topstersSection: {
    display: 'flex',
    flexWrap: 'wrap',
    scrollSnapType: 'y mandatory',
    scrollSnapAlign: 'start',
  },
  subMain: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem auto',
    // background: 'green',
    justifyContent: 'center',
    [sizes.down('lg')]: { width: 'inherit', paddingRight: '2rem' },
    [sizes.down('md')]: { marginLeft: '2rem' },
  },

  AOTDTitleContainer: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
  topsterScrollUpIconOn: {
    position: 'relative',
    marginLeft: '33%',
    '&:hover': {
      transform: 'scale(2)',
      transition: 'background 0.5s ease',
      cursor: 'pointer',
    },
    [sizes.down('xl')]: {
      marginLeft: '27%',
      marginBottom: '-2%',
      marginTop: '2%',
    },
    [sizes.down('lg')]: {
      marginLeft: '25%',
      marginBottom: '-4%',
      marginTop: '2%',
    },
    [sizes.down('md')]: {
      marginLeft: '20%',
      marginBottom: '-12%',
      marginTop: '4%',
    },
  },
  topsterScrollUpIconOff: {
    position: 'relative',
    marginLeft: '33%',
    opacity: 0,
    [sizes.down('xl')]: {
      marginLeft: '27%',
      marginBottom: '-2%',
      marginTop: '2%',
    },
    [sizes.down('lg')]: {
      marginLeft: '25%',
      marginBottom: '-4%',
      marginTop: '2%',
    },
    [sizes.down('md')]: {
      marginLeft: '20%',
      marginBottom: '-12%',
      marginTop: '4%',
    },
  },
  topsterScrollDownIconOn: {
    position: 'relative',
    marginLeft: '33%',
    '&:hover': {
      transform: 'scale(2)',
      transition: 'background 0.5s ease',
      cursor: 'pointer',
    },
    [sizes.down('xl')]: {
      marginLeft: '27%',
      marginTop: '-2%',
    },
    [sizes.down('lg')]: {
      marginLeft: '25%',
      marginTop: '-2%',
    },
    [sizes.down('md')]: {
      marginLeft: '20%',
      marginTop: '-8%',
    },
  },
  topsterScrollDownIconOff: {
    position: 'relative',
    marginLeft: '33%',
    opacity: 0,
    [sizes.down('xl')]: {
      marginLeft: '27%',
      marginTop: '-2%',
    },
    [sizes.down('lg')]: {
      marginLeft: '25%',
      marginTop: '-2%',
    },
    [sizes.down('md')]: {
      marginLeft: '20%',
      marginTop: '-8%',
    },
  },
});

export default styles;
