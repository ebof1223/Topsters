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
  exceededError,
  setExceededError,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={exceededError}
        autoHideDuration={1000}
        onClose={() => setExceededError(false)}
      >
        <Alert severity="error">Topster album capacity met.</Alert>
      </Snackbar>
    </div>
  );
}
