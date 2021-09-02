import { createStyles } from '@material-ui/styles';
const styles = createStyles({
  draggableBookmark: {
    width: '200px',
    height: '200px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    border: '3px solid #91a7ff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
});

export default styles;
