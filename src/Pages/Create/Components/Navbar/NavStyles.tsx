import { createStyles } from '@material-ui/styles';
import drawerWidth from '../../../../App/Constants/drawerwidth';
import sizes from '../../../../App/Constants/sizes';

const styles = (theme: {
  transitions: {
    create: (arg0: string[], arg1: { easing: any; duration: any }) => any;
    easing: { sharp: any; easeOut: any };
    duration: { leavingScreen: any; enteringScreen: any };
  };
  spacing: (arg0: number) => any;
}) =>
  createStyles({
    root: {
      display: 'flex',
    },
    hide: {
      display: 'none',
    },
    appBar: {
      flexDirection: 'row',
      height: '64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [sizes.down('md')]: {
        width: `calc(100% - ${350}px)`,
        marginLeft: '350px',
      },
      [sizes.down('xs')]: {
        width: `calc(100% - ${200}px)`,
        marginLeft: '200px',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    btnContainer: {
      display: 'flex',
      marginRight: '2rem',
      [sizes.down('lg')]: {
        marginRight: '5rem',
      },
      [sizes.down('xs')]: {
        transform: 'scale(0.8)',
        marginLeft: '-3rem',
      },
    },
  });

export default styles;
