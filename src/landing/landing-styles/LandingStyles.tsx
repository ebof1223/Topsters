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
    filter: 'blur(6px)',
  },
  Frame: {
    width: '100%',
    position: 'relative',
    perspective: '1500px',
    animation: '$infiniteScrollBg 200s infinite linear',
    '&::after': {
      content: "''",
      height: '500%',
      width: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundImage: `url(
        ${image}
        )`,
      transform: 'rotateX(10deg) rotateY(-15deg) rotateZ(10deg) scale(2)',
      backgroundSize: '100% 20%',
      // filter: 'blur(6px)',
    },
  },
  Image: {
    width: '100%',
    transform: 'rotateX(10deg) rotateY(-15deg) rotateZ(10deg) scale(2)',
  },
});
export default styles;
