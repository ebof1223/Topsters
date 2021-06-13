import { createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
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
  });
export default styles;
