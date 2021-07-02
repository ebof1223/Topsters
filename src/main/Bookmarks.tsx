import { withStyles } from '@material-ui/styles';
import styles from './main-styles/Bookmarks-styles';

interface Props {
  classes: {};
  bookmarks: [];
  setBookmarks: any;
}

const Bookmarks: React.FC<Props> = ({ classes, bookmarks, setBookmarks }) => {
  console.log(bookmarks);
  return <div></div>;
};

export default withStyles(styles)(Bookmarks);
