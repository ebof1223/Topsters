import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function NewToppingsModal({
  setUserToppingsName,
  userToppingsName,
  userToppings,
  toppings,
  history,
  saveToppings,
}) {
  const [errors, setErrors] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ title: '' });
    const newToppings = {
      title: userToppingsName,
      id: userToppingsName.toLowerCase().replace(/ /g, '-'),
      albums: userToppings,
    };

    if (toppings.toppings.some((item) => item.title === newToppings.title))
      return setErrors({ title: 'This title has already been taken' });

    if (!userToppingsName) return setErrors({ title: 'Please enter a title' });

    saveToppings(newToppings);
    history.push('/');
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Save
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Save Toppings</DialogTitle>
        <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <DialogContent>
            <DialogContentText>
              Enter a name for your new toppings list for the world to see!
            </DialogContentText>
            <TextField
              id="standard-basic"
              label="Toppings Name"
              name="userToppingsName"
              value={userToppingsName}
              onChange={(e) => setUserToppingsName(e.target.value)}
              helperText={errors?.title}
              error={Boolean(errors?.title)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
