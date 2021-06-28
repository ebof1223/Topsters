import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import styles from './main-styles/MiniTopster-styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { AlbumTemplate } from '../interface';
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
  id: string;
  deleteDialog: boolean;
  setDeleteDialog: (input: boolean) => void;
  handleClick: () => void;
  setToBeDeleted: (input: string) => void;
}

const MiniTopsters: React.FC<Props> = ({
  classes,
  albums,
  id,
  deleteDialog,
  setDeleteDialog,
  handleClick,
  setToBeDeleted,
  title,
}) => {
  const MiniTopsters = albums.map((item) => (
    <div
      className={classes.MiniTopsters}
      style={{
        background: `url(${item.image[3]['#text']}) no-repeat center center/cover`,
      }}
      key={item.name}
    />
  ));

  const handleDelete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setToBeDeleted(id);
    setDeleteDialog(!deleteDialog);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.card}>
        <div className={classes.topsterGrid} onClick={handleClick}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={(e) => handleDelete(e)}
          />
          {MiniTopsters}
          <div className={classes.PlayIcon}>
            <PlayCircleFilledIcon fontSize="large" />
          </div>
        </div>
        <div className={classes.title}>{title}</div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(MiniTopsters);
