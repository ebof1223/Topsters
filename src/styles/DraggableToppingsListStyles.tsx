import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  SearchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(47,48,52)',
    height: '91.5vh',
    width: '91.5vw',
    margin: '4vh auto',
    justifyContent: 'space-between',
    overflow: 'none',
  },

  UserToppingsContainer: {
    background: 'rgb(255,255,255)',
    margin: '0 auto',
    padding: '0.5rem',
    borderRadius: '2px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 250px)',
    gridTemplateRows: 'repeat(3, 250px)',
    gridGap: '10px',
  },
});

export default styles;
