import { createStyles } from '@material-ui/styles';
import sizes from '../../../../App/Constants/sizes';

const styles = createStyles({
  outerContainer: {
    margin: '3rem auto ',
    display: 'grid',
    overflow: 'none',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'repeat(3, 1fr)',
    gridGap: '1rem',
    [sizes.down('lg')]: {
      transform: 'scale(0.9)',
    },
    [sizes.down('md')]: {
      transform: 'scale(0.8)',
      margin: '0 auto',
    },
    [sizes.down('xs')]: {
      transform: 'scale(0.5)',
      width: '100%',
      marginLeft: '-4rem',
    },
  },
  draggableBookmark: {
    width: '200px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    border: '3px solid #91a7ff',
    borderRadius: '5px',
    [sizes.down('xs')]: {
      width: '150px',
      margin: 'auto',
    },
  },
});

export default styles;
