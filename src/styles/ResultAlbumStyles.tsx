import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  Album: {
    backgroundColor: '#dae1e4',
    borderRadius: '2px',
    height: '150px',
    width: '150px',
    scrollSnapType: 'y mandatory',
    scrollSnapAlign: 'start',
    // scrollSnapStop: 'always',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export default styles;
