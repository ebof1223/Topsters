import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
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
  duplicateError,
  setDuplicateError,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={duplicateError}
        autoHideDuration={1000}
        onClose={() => setDuplicateError(false)}
      >
        <Alert severity="error">
          That record has already been added. Try picking something different!
        </Alert>
      </Snackbar>
    </div>
  );
}
