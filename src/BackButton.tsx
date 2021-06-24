import React, { useState } from 'react';
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
    goBack: () => void;
    push: (input: string) => void;
  };
  ///FIXC
  setCurrentNode: (input: Node) => void;
  userToppingsHistory: any;
}
const BackButton: React.FC<Props> = ({
  userToppings,
  history,
  setCurrentNode,
  userToppingsHistory,
}) => {
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleClickOpen = () => {
    userToppings.length ? setOpenConfirm(true) : history.goBack();
  };

  const handleClose = () => {
    setOpenConfirm(false);
  };

  const handleBack = () => {
    userToppingsHistory.clear();
    setCurrentNode(null);
    history.goBack();
    setOpenConfirm(false);
  };
  return (
    <div style={{ marginLeft: '2rem' }}>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Go Back
      </Button>
      <Dialog
        open={openConfirm}
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

export default BackButton;
