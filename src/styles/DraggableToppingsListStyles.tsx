import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  UserToppingsContainer: {
    background: 'rgb(255,255,255)',
    boxSizing: 'border-box',
    height: '50vh',
    width: '30vw',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3,1fr)',
    gridGap: '10px',
    padding: '10px',
  },
});
export default styles;
