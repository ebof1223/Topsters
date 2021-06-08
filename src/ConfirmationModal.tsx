import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AlbumStructure } from './interface';
interface Props {
  userToppings: AlbumStructure[];
  history: {
    push: (input: string) => void;
  };
}
const ConfirmationModal: React.FC<Props> = ({ userToppings, history }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    userToppings.length ? setOpen(true) : history.push(`/`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBack = () => {
    history.push(`/`);
    setOpen(false);
  };

  return (
    <div style={{ marginLeft: '2rem' }}>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Go Back
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Return Without Finishing? 😢'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to return to the homepage without completing
            your toppings?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            On Second Thought..
          </Button>
          <Button onClick={handleBack} color="primary" autoFocus>
            Yeah I'm Good
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationModal;
