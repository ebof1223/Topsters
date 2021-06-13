import React from 'react';
import { AlbumStructure, ToppingsStructure } from './interface';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CharacterCounter from './CharacterCounter';

interface Props {
  setUserToppingsName: (input: string) => void;
  userToppingsName: string | null;
  userToppings: AlbumStructure[];
  match: { params: { id: string } };
  toppings: ToppingsStructure[];
  history: {
    push: (input: string) => void;
  };
  saveToppings: (input: ToppingsStructure) => void;
  //FICXCC
  setCurrentNode: (any) => void;
  userToppingsHistory: any;
}

const NewToppingsModal: React.FC<Props> = ({
  setUserToppingsName,
  userToppingsName,
  userToppings,
  toppings,
  history,
  saveToppings,
  match,
  setCurrentNode,
  userToppingsHistory,
}) => {
  const [errors, setErrors] = React.useState<{ title: string }>({
    title: '',
  });
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ title: '' });

    const newToppings: ToppingsStructure = {
      title: userToppingsName,
      id: userToppingsName.toLowerCase().replace(/ /g, '-'),
      albums: userToppings,
    };

    if (!userToppingsName) return setErrors({ title: 'Please enter a title' });

    if (newToppings.albums.length !== 9)
      return setErrors({
        title: 'Toppings must contain 9 albums. Please complete your toppings,',
      });
    if (userToppingsName.length > 20)
      return setErrors({ title: 'Topping names may not exceed 21 characters' });

    if (match.params.id) {
      for (let [index, item] of toppings.entries()) {
        if (item.id === match.params.id) {
          toppings.splice(index, 1, newToppings);
        }
      }
    } else {
      if (
        toppings.some(
          (item: ToppingsStructure) => item.title === newToppings.title
        )
      )
        return setErrors({ title: 'This title has already been taken' });

      saveToppings(newToppings);
    }

    setOpen(false);
    userToppingsHistory.clear();
    setCurrentNode(null);
    history.push('/');
  };

  return (
    <div>
      <Button
        style={{ marginLeft: '1rem' }}
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Save
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(true);
        }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Save Toppings</DialogTitle>
        <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <DialogContent>
            <DialogContentText>
              {match.params.id
                ? 'Please confirm the title of your toppings.'
                : 'Enter a name for your new toppings for the world to see!'}
            </DialogContentText>
            <TextField
              id="standard-basic"
              label="Toppings Name"
              name="userToppingsName"
              value={userToppingsName}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setUserToppingsName(e.target.value)
              }
              helperText={errors?.title}
              error={Boolean(errors?.title)}
              fullWidth
            />
          </DialogContent>
          <CharacterCounter userToppingsNameLength={userToppingsName.length} />
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              color="primary"
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default NewToppingsModal;
