import { withStyles } from '@material-ui/styles';
import { AlbumTemplate } from '../interface';
import Paper from '@material-ui/core/Paper';
import styles from './UserTopsterElement-styles';
import DeleteIcon from '@material-ui/icons/Delete';

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
  setToBeDeleted: (input: string) => void;
  handleClick: () => void;
}

const UserTopsters: React.FC<Props> = ({
  classes,
  albums,
  id,
  deleteDialog,
  setDeleteDialog,
  handleClick,
  setToBeDeleted,
}) => {
  const Recommended = albums.map((item) => (
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
      <Paper elevation={3} className={classes.card} onClick={handleClick}>
        <div className={classes.topsterGrid}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={(e) => handleDelete(e)}
          />
          {Recommended}
        </div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(UserTopsters);
