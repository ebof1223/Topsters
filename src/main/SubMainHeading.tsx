import { Tooltip, withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { TopsterTemplate } from '../interface';
import styles from './main-styles/SubMainHeading-styles';

interface Props {
  classes: {
    Fab: string;
    subMainTitle: string;
    BookmarkTitle: string;
    BookmarkCapacity: string;
    topstersTitle: string;
    topsterTitleContainer: string;
  };
  history: {
    push: (input: string) => void;
  };
  bookmarks: TopsterTemplate[];
}

const SubMainHeading: React.FC<Props> = ({ classes, bookmarks, history }) => {
  return (
    <div className={classes.subMainTitle}>
      <div className={classes.topsterTitleContainer}>
        <h2 className={classes.topstersTitle}>My Topsters</h2>
        <div>
          <Tooltip title="Add">
            <Fab
              aria-label="add"
              size="small"
              className={classes.Fab}
              onClick={() => {
                history.push('/topsters/new');
              }}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
      </div>
      <div className={classes.BookmarkTitle}>
        <h2>
          Up Next{' '}
          <span className={classes.BookmarkCapacity}>
            <sup>{`${bookmarks.length}`}</sup> &frasl; <sub>9</sub>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default withStyles(styles)(SubMainHeading);
