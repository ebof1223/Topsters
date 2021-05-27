import { createStyles } from '@material-ui/core';

const styles = createStyles({
  Toppings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgb(47,48,52)',
    height: '90vh',
    width: '90vw',
    margin: 'auto',
  },

  ToppingsContainer: {
    background: 'rgb(255,255,255)',
    padding: '0.2rem',
    margin: 'auto',
  },

  ToppingsAlbums: {
    height: '90%',
    display: 'grid',
    gridTemplateRows: '200px 200px 200px',
    gridTemplateColumns: '200px 200px 200px',
  },

  ToppingsFooter: {
    backgroundColor: 'white',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '1rem',
    fontWeight: 'bold',
  },
});

export default styles;
