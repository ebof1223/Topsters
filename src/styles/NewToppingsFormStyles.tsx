import { createStyles } from '@material-ui/styles';
import drawerWidth from './constants';

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
    },
    drawerPaper: {
      width: drawerWidth,
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
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  });

export default styles;
