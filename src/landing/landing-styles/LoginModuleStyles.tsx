import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'fixed',
      width: 400,
      height: 275,
      aspectRatio: '1/0.5',
      margin: 'auto',
      inset: 0,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '2px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 4, 5),
      textAlign: 'center',
      fontFamily: 'Lexend, sans-serif',
    },
    margin: {
      margin: theme.spacing(1),
    },
    title: {
      fontFamily: 'Merriweather, serif',
      fontWeight: 900,
      fontSize: '2rem',
    },
    subtitle: { margin: '2rem 0' },
  })
);

export default useStyles;
