import { createStyles } from '@material-ui/styles';

const styles = createStyles({
  Album: {
    backgroundColor: '#dae1e4',
    borderRadius: '5px',
    height: '150px',
    width: '150px',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export default styles;
