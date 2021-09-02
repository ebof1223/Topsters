import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
interface Props {
  deleteDialog: boolean;
  setDeleteDialog: (i: boolean) => void;
  handleDeleteConfirmation: () => void;
}
const DeleteModal: React.FC<Props> = ({
  deleteDialog,
  handleDeleteConfirmation,
  setDeleteDialog,
}) => {
  return (
    <Dialog open={deleteDialog} aria-labelledby="delete-dialog-title">
      <DialogTitle id="delete-dialog-title">Delete this topsters?</DialogTitle>
      <List>
        <ListItem button onClick={handleDeleteConfirmation}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
              <CheckIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Delete"></ListItemText>
        </ListItem>
        <ListItem button onClick={() => setDeleteDialog(!deleteDialog)}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
              <CloseIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Cancel"></ListItemText>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default DeleteModal;
