import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  newTopstersContainer: {
    background: 'rgb(255,255,255)',
    padding: '0.5rem',
    borderRadius: '2px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 250px)',
    gridTemplateRows: 'repeat(3, 250px)',
    gridGap: '10px',
    zIndex: 5,
    margin: 'auto',
  },
});

export default styles;
