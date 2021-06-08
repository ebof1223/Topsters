import sizes from './sizes';
import { createStyles } from '@material-ui/styles';
const styles = createStyles({
  Album: {
    background: '#444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#AAA',
    margin: '0.4rem 0.3rem',
    borderRadius: '1px',
    '&:hover': {
      cursor: 'pointer',
    },
    // [sizes.down('lg')]: {
    //   width: '25%',
    // },
    // [sizes.down('md')]: {
    //   width: '50%',
    // },
    // [sizes.down('xs')]: {
    //   width: '100%',
    // },
  },
  SelectedAlbum: {
    background: '#444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#AAA',
    margin: '0.4rem 0.3rem',
    borderRadius: '1px',
    transform: 'translateY(-55px)',
    transition: 'all 0.1s ease',
  },
});
export default styles;
