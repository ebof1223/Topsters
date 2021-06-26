import { withStyles } from '@material-ui/styles';
import styles from './landing-styles/LandingStyles';
import backgroundImage from './landing-styles/topster-landing.jpg';

interface Props {
  classes: {
    Scene: string;
    Frame: string;
    Image: string;
  };
}

const Landing: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.Scene}>
      <div className={classes.Frame}>
        <img
          className={classes.Image}
          src={backgroundImage}
          alt="background albums"
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Landing);
