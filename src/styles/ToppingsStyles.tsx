import { createStyles } from '@material-ui/core';

const styles = createStyles({
  Toppings: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(47,48,52)',
    height: '92.5vh',
    width: '92.5vw',
    margin: '5vh auto',
  },
  ToppingsDescription: {
    '& h1': {
      fontSize: '2rem',
      fontFamily: 'Lexend Peta, sans-serif',
    },
    '& h2': {
      fontSize: '1.5rem',
      fontWeight: '700',
    },
    '& ol': {
      marginLeft: '1rem',
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: '2rem',
      fontWeight: '600',
    },
    fontFamily: 'Lexend, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    color: 'rgb(255,255,255)',
    margin: '0 auto',
  },
  ToppingsContainer: {
    background: 'rgb(255,255,255)',
    margin: '0 auto',
    padding: '0.5rem',
  },

  ToppingsAlbums: {
    display: 'grid',
    gridTemplateRows: '250px 250px 250px',
    gridTemplateColumns: '250px 250px 250px',
    maxHeight: '750px',
    background: 'rgb(255,255,255)',
    marginBottom: 0,
  },

  ToppingsFooter: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '1rem',
    fontWeight: 'bold',
  },
});

export default styles;
