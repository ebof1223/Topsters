import { withStyles } from '@material-ui/styles';
import styles from './ResultsItemStyles';

interface Props {
  cover: string;
  onClick: () => void;
  classes: {
    Album: string;
  };
}

const Result_Album: React.FC<Props> = ({ cover, onClick, classes }) => {
  return (
    <div
      style={{
        background: `url(${cover}) no-repeat center center/cover`,
      }}
      onClick={onClick}
      className={classes.Album}
    ></div>
  );
};

export default withStyles(styles)(Result_Album);
