import drawerWidth from './constants';
import sizes from './sizes';

const styles = (theme) => ({
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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  btnContainer: {
    display: 'flex',
    marginRight: '0.5rem',
  },
});

export default styles;
