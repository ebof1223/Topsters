import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  Navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    minWidth: '100%',
    padding: '0.75rem 2rem',
  },

  Navigation: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  selectContainer: {
    marginRight: '1rem',
  },
});

export default styles;
