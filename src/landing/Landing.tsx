import { withStyles } from '@material-ui/styles';
import styles from './landing-styles/LandingStyles';
import image1 from './landing-styles/topster-landing1.jpg';
// import image2 from './landing-styles/topster-landing2.jpg';
import LoginModule from './LoginModule';

interface Props {
  classes: {
    Scene: string;
    Frame: string;
    Image: string;
  };
}

const Landing: React.FC<Props> = ({ classes }) => {
  return (
    <>
      <LoginModule />
      <div className={classes.Scene}>
        <div className={classes.Frame}>
          <img className={classes.Image} src={image1} alt="background albums" />
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(Landing);
