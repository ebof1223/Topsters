import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  root: {
    backgroundColor: 'rgb(23,23,26)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
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
  BackButton: {
    color: 'white',
    position: 'relative',
    cursor: 'pointer',
    top: 10,
    left: 25,
  },
});

export default styles;
