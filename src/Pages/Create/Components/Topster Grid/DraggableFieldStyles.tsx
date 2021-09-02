import { createStyles } from '@material-ui/styles';
import sizes from '../../../App/Constants/sizes';

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
    [sizes.down('md')]: {
      transform: 'scale(0.8)',
    },
    [sizes.down('xs')]: {
      transform: 'scale(0.5)',
    },
  },
});

export default styles;
