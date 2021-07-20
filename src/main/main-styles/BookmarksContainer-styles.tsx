import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  outerContainer: {
    margin: 'auto',
    display: 'grid',
    overflow: 'auto',
    padding: '5rem 0',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'repeat(3, 1fr)',
    gridGap: '1rem',
  },
  draggableBookmark: {
    width: '200px',
    height: '200px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    border: '3px solid #91a7ff',
    borderRadius: '5px',
  },
});

export default styles;
