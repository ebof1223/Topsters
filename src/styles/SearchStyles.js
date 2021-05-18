const styles = {
  resultsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flexStart',
    marginBottom: '1.5rem',
    overflowX: 'hidden',
    overflowY: 'scroll',
    marginLeft: '1.5rem',
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
};
export default styles;
