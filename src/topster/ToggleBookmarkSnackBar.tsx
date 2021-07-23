import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ToggleBookmarkSnackBar({
  openSnackBar,
  setOpenSnackBar,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={1000}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert severity="info">Bookmark added!</Alert>
      </Snackbar>
    </div>
  );
}
