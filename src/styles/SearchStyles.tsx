import { createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    resultsContainer: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flexStart',
      margin: '1.5rem 0',
      overflow: 'auto',
      paddingLeft: '1.5rem',
    },
    Album: {
      backgroundColor: '#dae1e4',
      borderRadius: '5px',
      height: '150px',
      width: '150px',
      overflow: 'hidden',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  });
export default styles;
