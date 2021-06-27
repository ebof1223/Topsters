import { createStyles } from '@material-ui/styles';
import image1 from './topster-landing1.jpg';
import image2 from './topster-landing2.jpg';

const styles = createStyles({
  '@keyframes infiniteScrollBg': {
    '0%': {
      transform: 'translateY(-100%)',
    },
    '100%': {
      transform: 'translateY(-300%)',
    },
  },

  Scene: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    minHeight: '400px',
    filter: 'blur(5px)',
  },
  Frame: {
    width: '100%',
    position: 'relative',
    perspective: '1500px',
    animation: '$infiniteScrollBg 100s infinite linear',
    '&::after': {
      content: "''",
      height: '500%',
      width: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      // background: `url(${Math.floor(Math.random() * 2)})`,
      background: `url(${image1})`,
      backgroundSize: '100% 20%',
    },
  },
  Image: {
    width: '100%',
  },
});
export default styles;
