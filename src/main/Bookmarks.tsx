import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { AlbumTemplate, TopsterTemplate } from '../interface';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styles from './main-styles/Bookmarks-styles';

interface Props {
  classes: {
    root: string;
    outerContainer: string;
    topster: string;
    draggableBookmark: string;
    BackButton: string;
  };
  bookmarks: TopsterTemplate[];
  setBookmarks: any;
  history: any;
}

const Bookmarks: React.FC<Props> = ({
  classes,
  bookmarks,
  setBookmarks,
  history,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.BackButton} onClick={() => history.push('/home')}>
        <Tooltip title="Home">
          <ArrowBackIcon fontSize="large" />
        </Tooltip>
      </div>
      <div className={classes.outerContainer}>
        {bookmarks.map((bookmark: TopsterTemplate) => (
          <div
            className={classes.draggableBookmark}
            key={`${bookmark.id}-rearrangable`}
          >
            {bookmark.albums.map((album: AlbumTemplate) => (
              <div
                style={{
                  background: `url(${album.image[3]['#text']}) no-repeat center center/cover`,
                }}
                key={`${album.name}-bookmark-rearrange`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(Bookmarks);
