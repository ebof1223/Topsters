import { withStyles } from '@material-ui/styles';
import { AlbumTemplate } from '../interface';
import Paper from '@material-ui/core/Paper';
import styles from './main-styles/Recommended-styles';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

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
  };
  title: string;
  albums: AlbumTemplate[];
  handleClick: () => void;
}

const Recommended: React.FC<Props> = ({
  classes,
  albums,
  handleClick,
  title,
}) => {
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.card} onClick={handleClick}>
        <div className={classes.topsterGrid}>
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
          <div className={classes.PlayIcon}>
            <PlayCircleFilledIcon fontSize="large" />
          </div>
        </div>
        <div className={classes.title}>{title}</div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Recommended);
