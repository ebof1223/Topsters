import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

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
  openExceededError,
  setOpenExceededError,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={openExceededError}
        autoHideDuration={1000}
        onClose={() => setOpenExceededError(false)}
      >
        <Alert severity="error">Maximum bookmark count exceeded.</Alert>
      </Snackbar>
    </div>
  );
}
