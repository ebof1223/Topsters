import { createStyles } from '@material-ui/core';
import sizes from '../../../../App/Constants/sizes';

const styles = createStyles({
  sectionWrapper: {
    gridColumn: '1/5',
    margin: '0 auto',

    [sizes.down('xs')]: {
      margin: '2rem auto',
      gridArea: 'recommended',
    },
    '@media all and (width: 667px) and (height: 375px)': {
      gridArea: 'recommended',
    },
  },
  RecommendedTitle: {
    color: '#fff',
    fontSize: '2rem',
    fontFamily: 'Merriweather, serif',
    position: 'relative',
    left: '7%',
    [sizes.down('xs')]: { textAlign: 'center', left: 0 },
    '@media all and (width: 667px) and (height: 375px)': {
      textAlign: 'center',
      left: 0,
    },
  },
  RecommendedContainer: {
    display: 'flex',
    alignItems: 'center',
    '@media all and (width: 667px) and (height: 375px)': {
      display: 'none',
    },
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
});

export default styles;
