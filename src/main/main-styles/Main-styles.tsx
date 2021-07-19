import { createStyles } from '@material-ui/styles';
// import sizes from '../../styles/sizes';

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
    // overflowY: 'auto',
    // overflowX: 'hidden',
    // paddingBottom: '3rem',
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
    // flexWrap: 'wrap',

    // [sizes.down('xl')]: {
    //   width: '80%',
    // },
    // [sizes.down('xs')]: {
    //   width: '75%',
    // },
  },
  Fab: {
    display: 'flex',
    top: '40%',
    left: '50%',
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
    marginTop: '2rem',
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'row',
    overflow: 'hidden',
    scrollSnapType: 'x mandatory',
    width: '1340px',
    scrollbarWidth: 'none',
    alignItems: 'center',

    // height: 'calc(100vh - 4rem)',
    //   [sizes.down('md')]: {
    //     // gridTemplateColumns: 'repeat(2, 50%)',
    //   },
    //   [sizes.down('xs')]: {
    //     // gridTemplateColumns: 'repeat(1, 100%)',
    //     gridGap: '1.4rem',
    //   },
  },
  RecommendedContainer: { display: 'flex', alignItems: 'center' },
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
  // DOTS STUFF HERE
  dotContainerHorizontal: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: '2rem',
    cursor: 'pointer',
  },

  dotContainerVertical: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    marginRight: '2rem',
    cursor: 'pointer',
  },
  dotsHorizontalActive: {
    width: '10px',
    height: '10px',
    borderRadius: '50px',
    background: 'hsla(0, 0%, 100%, .8)',
    marginLeft: '1rem',
    transform: 'scale(1.5)',
  },
  dotsHorizontalInactive: {
    width: '10px',
    height: '10px',
    borderRadius: '50px',
    background: 'hsla(0, 0%, 100%, .8)',
    marginLeft: '1rem',
    opacity: '0.3',
  },
  dotsVerticalActive: {
    width: '10px',
    height: '10px',
    borderRadius: '50px',
    background: 'hsla(0, 0%, 100%, .8)',
    marginBottom: '1rem',
    transform: 'scale(1.5)',
  },
  dotsVerticalInactive: {
    width: '10px',
    height: '10px',
    borderRadius: '50px',
    background: 'hsla(0, 0%, 100%, .8)',
    marginBottom: '1rem',
    opacity: '0.3',
  },

  UserTitleContainer: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    marginTop: '4rem',
    display: 'flex',
    alignItems: 'center',
  },
  UserTopsters: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    overflowX: 'hidden',
    scrollbarWidth: 'none',
    scrollSnapType: 'y mandatory',
    height: '400px',
    width: '800px',
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
  AOTDContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'repeat(3, 1fr)',
    borderRadius: '5px',
    border: '3px solid #91a7ff',
    width: '400px',
    height: '400px',
    marginLeft: '5rem',
    cursor: 'pointer',
    position: 'relative',
  },
  AOTDContainerEmpty: {
    borderRadius: '5px',
    border: '3px solid #91a7ff',
    width: '400px',
    height: '400px',
    marginLeft: '5rem',
    cursor: 'pointer',
    position: 'relative',
    textAlign: 'center',
  },
  AOTDTitleContainer: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
  firstBookmarkedItem: {
    height: '131.5px',
    display: 'block ruby',
  },
  CompareArrowsIcon: {
    position: 'absolute',
    left: '85%',
    top: '2%',
    zIndex: 10,
    fontSize: '50px',
  },
  noBookmarks: {
    marginTop: '40%',
    fontSize: '2rem',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'inherit',
  },
});

export default styles;
