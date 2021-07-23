import { withStyles } from '@material-ui/styles';
import styles from './main-styles/UpNext-styles';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import { Tooltip } from '@material-ui/core';
import { AlbumTemplate, TopsterTemplate } from '../interface';

interface Props {
  classes: {
    AOTDContainer: string;
    AOTDContainerEmpty: string;
    CompareArrowsIcon: string;
    firstBookmarkedItem: string;
    noBookmarks: string;
  };
  bookmarks: TopsterTemplate[];
  history: {
    push: (input: string) => void;
  };
}

const UpNext: React.FC<Props> = ({ classes, bookmarks, history }) => {
  return (
    <>
      {bookmarks.length ? (
        <div key={bookmarks[0].id} className={classes.AOTDContainer}>
          <Tooltip title="Rearrange">
            <CompareArrowsIcon
              className={classes.CompareArrowsIcon}
              onClick={() => history.push('/bookmarks')}
              color="primary"
            />
          </Tooltip>
          {bookmarks[0].albums.map((item: AlbumTemplate) => (
            <div
              onClick={() => history.push(`/bookmarks/${bookmarks[0].id}`)}
              className={classes.firstBookmarkedItem}
              style={{
                background: `url(${item.image[3]['#text']}) no-repeat center center/cover`,
              }}
              key={item.name}
            />
          ))}
        </div>
      ) : (
        <div className={classes.AOTDContainerEmpty} key={'bookmarks'}>
          <h3 className={classes.noBookmarks}>You're all caught up!</h3>
        </div>
      )}
    </>
  );
};

export default withStyles(styles)(UpNext);
