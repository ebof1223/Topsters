import { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniToppings from './MiniToppings';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles/ToppingsListStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { ToppingsStructure } from './interface';
import Tooltip from '@material-ui/core/Tooltip';

interface Props {
  toppings: ToppingsStructure[];
  history: {
    push: (input: string) => void;
  };
  setToppings: (input: ToppingsStructure[]) => void;
  classes: {
    root: string;
    heading: string;
    OuterContainer: string;
    nav: string;
    toppings: string;
  };
}

const ToppingsList: React.FC<Props> = ({
  toppings,
  history,
  setToppings,
  classes,
}) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(null);

  const goToToppings = (id: string) => {
    history.push(`/toppings/${id}`);
  };
  const handleDeleteConfirmation = () => {
    let newToppings = toppings.filter((item) => item.id !== toBeDeleted);
    setToppings([...newToppings]);

    setDeleteDialog(!deleteDialog);
  };
  return (
    <div className={classes.root}>
      <div className={classes.OuterContainer}>
        <nav className={classes.nav}>
          <Link to={'/toppings/new'}>
            <Tooltip title="Add">
              <Fab
                color="inherit"
                aria-label="add"
                size="large"
                style={{
                  position: 'absolute',
                  right: '10%',
                }}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Link>
        </nav>
        {/* {console.log(toppings)} */}
        <TransitionGroup className={classes.toppings}>
          {toppings.map((item: ToppingsStructure) => (
            <CSSTransition key={item.id} classNames="fade" timeout={500}>
              <MiniToppings
                {...item}
                handleClick={() => goToToppings(item.id)}
                id={item.id}
                deleteDialog={deleteDialog}
                setDeleteDialog={setDeleteDialog}
                setToBeDeleted={setToBeDeleted}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog open={deleteDialog} aria-labelledby="delete-dialog-title">
        <DialogTitle id="delete-dialog-title">
          Delete this Toppings?
        </DialogTitle>
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
    </div>
  );
};

export default withStyles(styles)(ToppingsList);
