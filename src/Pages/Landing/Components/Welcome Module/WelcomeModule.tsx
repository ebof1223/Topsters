import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import useStyles from './landing-styles/LoginModuleStyles';

interface Props {
  history: any;
  openLandingModal: boolean;
  setOpenLandingModal: (i: boolean) => void;
}

const LoginModule: React.FC<Props> = ({
  history,
  openLandingModal,
  setOpenLandingModal,
}) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpenLandingModal(false);
    setTimeout(() => {
      history.push('/home');
    }, 250);
  };
  return (
    <div>
      <Modal
        open={openLandingModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h2 className={classes.title}>Welcome to Topsters</h2>
          <p className={classes.subtitle}>
            A site dedicated to helping you share your favorite music with the
            world
          </p>
          <Button
            onClick={handleClose}
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
          >
            Get Started
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModule;
