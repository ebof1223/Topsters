import { createStyles } from '@material-ui/core';
import sizes from '../../sizes';

const styles = createStyles({
  sectionWrapper: {
    gridColumn: '1/5',
    margin: '0 auto',
    [sizes.down('xs')]: { margin: '2rem auto' },
  },
  RecommendedTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
  RecommendedContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  RecommendedTopsters: {
    width: '70vw',
    overflow: 'hidden',
    margin: '2rem auto',
    display: 'flex',
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none',
    [sizes.down('xs')]: { margin: '-15% auto 0 auto' },
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
