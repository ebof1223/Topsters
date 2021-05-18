import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableAlbumStyles';

const DraggableAlbum = SortableElement(({ cover, classes, onClick }) => {
  return (
    <div
      style={{
        background: `url(${cover}) no-repeat center center/cover`,
      }}
      className={classes.root}
      onClick={onClick}
      id="draggable"
    >
      <div className={classes.boxContent}>
        <span className={classes.links}>
          <DeleteIcon className={classes.deleteIcon} />
        </span>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableAlbum);
