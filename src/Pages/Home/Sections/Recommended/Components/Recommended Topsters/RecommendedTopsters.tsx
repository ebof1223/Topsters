import { withStyles } from '@material-ui/styles';
import { AlbumTemplate, TopsterTemplate } from '../interface';
import Paper from '@material-ui/core/Paper';
import styles from './main-styles/RecommendedTopsters-styles';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';

interface Props {
  classes: {
    root: string;
    title: string;
    avatar: string;
    MiniTopsters: string;
    deleteIcon: string;
    card: string;
    topsterGrid: string;
    PlayIcon: string;
    FavoriteIcon: string;
  };
  title: string;
  albums: AlbumTemplate[];
  recommended: TopsterTemplate[];
  handleClick: () => void;
  id: string;
}

const RecommendedTopsters: React.FC<Props> = ({
  classes,
  albums,
  handleClick,
  title,
  recommended,
  id,
}) => {
  const currentRecommended =
    recommended[
      recommended.findIndex((item: { id: string }) => item.id === id)
    ];

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.card} onClick={handleClick}>
        <div className={classes.topsterGrid}>
          {currentRecommended.bookmarked && (
            <FavoriteIcon className={classes.FavoriteIcon} color="primary" />
          )}
          {albums.map((item) => (
            <div
              className={classes.MiniTopsters}
              style={{
                background:
                  `url(${item.image[1]['#text']}) no-repeat center center/cover` &&
                  `url(${item.image[2]['#text']}) no-repeat center center/cover` &&
                  `url(${item.image[3]['#text']}) no-repeat center center/cover`,
              }}
              key={item.name}
            />
          ))}
          <PlayCircleFilledIcon fontSize="large" className={classes.PlayIcon} />
        </div>
        <div className={classes.title}>{title}</div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(RecommendedTopsters);
