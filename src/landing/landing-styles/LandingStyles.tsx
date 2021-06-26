import { createStyles } from '@material-ui/styles';
import image from './topster-landing.jpg';

const styles = createStyles({
  '@keyframes infiniteScrollBg': {
    '0%': {
      transform: 'translateY(-100%)',
    },
    '100%': {
      transform: 'translateY(-200%)',
    },
  },

  Scene: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    minHeight: '400px',
  },
  Frame: {
    width: '100%',
    position: 'relative',
    animation: '$infiniteScrollBg 30s infinite linear',
    '&:after': {
      pointer: 'cursor',
      content: '',
      height: '500%',
      width: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: '#4277a3',
      backgroundImage: `url(
        ${image}
        )`,
      backgroundSize: '100% 20%',
    },
  },
  Image: {
    // filter: 'blur(4px)',
    // width: '100%',
  },
});
export default styles;
