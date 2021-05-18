const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  albums: {
    backgroundColor: '#dae1e4',
    borderRadius: '5px',
    height: '150px',
    width: '100%',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0',
    alignItems: 'center',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  avatar: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
  miniToppings: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px',
  },
};
export default styles;
