import { createStyles } from '@material-ui/styles';
import sizes from '../../App/Constants/sizes';
import drawerWidth from '../../App/Constants/drawerwidth';

const styles = (theme: {
  spacing: (arg0: number, arg1: number) => any;
  mixins: { toolbar: any };
  transitions: {
    create: (arg0: string, arg1: { easing: any; duration: any }) => any;
    easing: { sharp: any; easeOut: any };
    duration: { leavingScreen: any; enteringScreen: any };
  };
}) =>
  createStyles({
    root: {
      display: 'flex',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      [sizes.down('md')]: { width: 350 },
      [sizes.down('xs')]: { width: 200 },
    },
    drawerPaper: {
      width: drawerWidth,
      [sizes.down('md')]: { width: 350 },
      [sizes.down('xs')]: { width: 200 },
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      height: 'calc(100vh - 64px)',
      flexGrow: 1,
      padding: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      [sizes.down('md')]: { marginLeft: -350 },
      [sizes.down('xs')]: { width: -200 },
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    background: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgb(47,48,52)',
      position: 'fixed',
      inset: '4rem',
      margin: '2vh auto',
      justifyContent: 'center',
    },
  });

export default styles;
