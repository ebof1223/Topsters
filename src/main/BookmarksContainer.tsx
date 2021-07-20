import { withStyles } from '@material-ui/styles';
import { TopsterTemplate } from '../interface';
import styles from './main-styles/BookmarksContainer-styles';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableBookmark from './DraggableBookmark';

interface Props {
  classes: {
    outerContainer: string;
    draggableBookmark: string;
  };
  bookmarks: TopsterTemplate[];
}

const BookmarksContainer = SortableContainer(
  ({ classes, bookmarks }: Props) => {
    return (
      <div className={classes.outerContainer}>
        {bookmarks.map((bookmark: TopsterTemplate, index: number) => (
          <DraggableBookmark
            bookmark={bookmark}
            index={index}
            key={`${bookmark.id}-rearrangable`}
          />
        ))}
      </div>
    );
  }
);

export default withStyles(styles)(BookmarksContainer);
