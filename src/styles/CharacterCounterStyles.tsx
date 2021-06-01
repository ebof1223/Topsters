import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  root: {
    width: '15%',
    height: '15%',
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: '1rem',
    zIndex: 99,
    '& circle': {
      fill: 'none',
      strokeWidth: '3',
      r: '15',
      cx: '50%',
      cy: '50%',
    },
  },
});

export default styles;
