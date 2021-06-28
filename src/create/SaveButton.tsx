import React from 'react';
import { AlbumTemplate, TopsterTemplate } from '../interface';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CharacterCounter from './CharacterCounter';

interface Props {
  setNewTopsterName: (input: string) => void;
  newTopsterName: string | null;
  newTopsters: AlbumTemplate[];
  match: { params: { id: string } };
  topsters: TopsterTemplate[];
  history: {
    goBack: () => void;
    push: (input: string) => void;
  };
  saveTopsters: (input: TopsterTemplate) => void;
  //FICXCC
  setCurrentNode: (input: any) => void;
  newTopstersHistory: any;
  setOpenConfirm: (i: boolean) => void;
  openConfirm: boolean;
}

const SaveButton: React.FC<Props> = ({
  setNewTopsterName,
  newTopsterName,
  newTopsters,
  topsters,
  history,
  saveTopsters,
  match,
  setCurrentNode,
  newTopstersHistory,
  setOpenConfirm,
  openConfirm,
}) => {
  const [errors, setErrors] = React.useState<{ title: string }>({
    title: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ title: '' });

    const newTopster: TopsterTemplate = {
      title: newTopsterName,
      id: newTopsterName.toLowerCase().replace(/ /g, '-'),
      albums: newTopsters,
    };

    if (!newTopsterName) return setErrors({ title: 'Please enter a title' });

    let reg = /^[a-zA-Z0-9_ ]*$/;

    if (!reg.test(newTopster.title))
      return setErrors({
        title:
          'Title can only contain numbers and letters. Please choose a differrent title .',
      });

    if (newTopster.albums.length !== 9)
      return setErrors({
        title: 'Topsters must contain 9 albums',
      });
    if (newTopsterName.length > 20)
      return setErrors({ title: 'Topster names may not exceed 21 characters' });

    if (match.params.id) {
      for (let [index, item] of topsters.entries()) {
        if (item.id === match.params.id) {
          topsters.splice(index, 1, newTopster);
        }
      }
    } else {
      if (
        topsters.some(
          (item: TopsterTemplate) => item.title === newTopster.title
        )
      )
        return setErrors({ title: 'This title has already been taken' });

      saveTopsters(newTopster);
    }

    setOpenConfirm(false);
    newTopstersHistory.clear();
    setCurrentNode(null);
    history.push(`/topsters/${newTopster.id}`);
  };
  return (
    <div>
      <Button
        style={{ marginLeft: '1rem' }}
        variant="contained"
        color="primary"
        onClick={() => {
          setOpenConfirm(true);
        }}
      >
        Save
      </Button>
      <Dialog
        onBackdropClick={() => setOpenConfirm(false)}
        open={openConfirm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Save Topster</DialogTitle>
        <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <DialogContent>
            <DialogContentText>
              {match.params.id
                ? 'Please confirm the title of your topsters.'
                : 'Enter a name for your new topsters for the world to see!'}
            </DialogContentText>
            <TextField
              autoFocus
              id="standard-basic"
              label="Topster Name"
              name="newTopsterName"
              value={newTopsterName}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNewTopsterName(e.target.value)
              }
              helperText={errors?.title}
              error={Boolean(errors?.title)}
              fullWidth
            />
          </DialogContent>
          <CharacterCounter newTopsterNameLength={newTopsterName.length} />
          <DialogActions>
            <Button
              onClick={() => {
                setOpenConfirm(false);
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

export default SaveButton;
