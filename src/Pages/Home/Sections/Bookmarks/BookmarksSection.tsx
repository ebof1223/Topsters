import {
  AlbumTemplate,
  TopsterTemplate,
} from '../../../../App/Constants/interface';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import styles from './BookmarksSection-styles';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

interface Props {
  classes: {
    bookmarkContainer: string;
    bookmarkContainerEmpty: string;
    CompareArrowsIcon: string;
    firstBookmarkedAlbum: string;
    noBookmarks: string;
    BookmarkTitle: string;
    BookmarkCapacity: string;
    sectionWrapper: string;
  };
  bookmarks: TopsterTemplate[];
  history: {
    push: (input: string) => void;
  };
}

const UpNext: React.FC<Props> = ({ classes, bookmarks, history }) => {
  return (
    <section className={classes.sectionWrapper}>
      <div className={classes.BookmarkTitle}>
        <h2 onClick={() => history.push(`/bookmarks/${bookmarks[0].id}`)}>
          Up Next{' '}
          <span className={classes.BookmarkCapacity}>
            <sup>{`${bookmarks.length}`}</sup> &frasl; <sub>9</sub>
          </span>
        </h2>
      </div>
      {bookmarks.length ? (
        <div key={bookmarks[0].id} className={classes.bookmarkContainer}>
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
              className={classes.firstBookmarkedAlbum}
              style={{
                background: `url(${item.image[3]['#text']}) no-repeat center center/cover`,
              }}
              key={item.name}
            />
          ))}
        </div>
      ) : (
        <div className={classes.bookmarkContainerEmpty} key={'bookmarks'}>
          <h3 className={classes.noBookmarks}>You're all caught up!</h3>
        </div>
      )}
    </section>
  );
};

export default withStyles(styles)(UpNext);
