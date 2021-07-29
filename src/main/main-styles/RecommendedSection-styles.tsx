import { createStyles } from '@material-ui/core';
import sizes from '../../sizes';

const styles = createStyles({
  sectionWrapper: {
    gridColumn: '1/5',
    margin: '0 auto',
  },
  RecommendedTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
  RecommendedContainer: {
    display: 'flex',
    alignItems: 'center',
    // overflow: 'hidden',
  },
  RecommendedTopsters: {
    width: '70vw',
    overflow: 'hidden',
    margin: '2rem auto',
    display: 'flex',
    // flexDirection: 'row',
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none',
  },
  recommendedArrowVisible: {
    fontSize: '70px',
    cursor: 'pointer',
  },
  // recommendedArrowHidden: {
  //   fontSize: '70px',
  //   opacity: '0.2',
  //   pointerEvents: 'none',
  // },
});

export default styles;
