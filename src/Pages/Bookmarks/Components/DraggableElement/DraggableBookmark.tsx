import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import { AlbumTemplate, TopsterTemplate } from '../../App/Constants/interface';
import styles from './bookmarks-styles/DraggableBookmark-styles';

interface Props {
  classes: {
    draggableBookmark: string;
  };
  bookmark: TopsterTemplate;
}

const DraggableBookmark = SortableElement(({ classes, bookmark }: Props) => {
  return (
    <div className={classes.draggableBookmark}>
      {bookmark.albums.map((album: AlbumTemplate) => (
        <div
          style={{
            background: `url(${album.image[3]['#text']}) no-repeat center center/cover`,
          }}
          key={`${album.name}-bookmark-rearrange`}
        />
      ))}
    </div>
  );
});

export default withStyles(styles)(DraggableBookmark);
