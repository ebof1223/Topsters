import { SortableContainer } from 'react-sortable-hoc';

import DraggableBookmark from '../DraggableElement/DraggableBookmark';
import styles from './DraggableField-styles';
import { TopsterTemplate } from '../../../../App/Constants/interface';
import { withStyles } from '@material-ui/styles';

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
