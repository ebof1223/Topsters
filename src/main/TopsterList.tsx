import { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TopsterTemplate } from '../interface';
import MiniTopsters from './MiniTopsters';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './main-styles/TopsterList-styles';
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
import Tooltip from '@material-ui/core/Tooltip';

interface Props {
  topsters: TopsterTemplate[];
  history: {
    goBack: () => void;
    push: (input: string) => void;
  };
  setTopsters: (input: TopsterTemplate[]) => void;
  classes: {
    root: string;
    heading: string;
    OuterContainer: string;
    nav: string;
    topsters: string;
  };
}

const TopsterList: React.FC<Props> = ({
  topsters,
  history,
  setTopsters,
  classes,
}) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(null);

  const toTopster = (id: string) => {
    history.push(`/topsters/${id}`);
  };
  const handleDeleteConfirmation = () => {
    let newTopster = topsters.filter((item) => item.id !== toBeDeleted);
    setTopsters([...newTopster]);

    setDeleteDialog(!deleteDialog);
  };
  return (
    <div className={classes.root}>
      <div className={classes.OuterContainer}>
        <nav className={classes.nav}>
          <Link to={'/topsters/new'}>
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
        <h1 style={{ color: '#fff', fontFamily: 'Merriweather, serif' }}>
          Recommended
        </h1>
        <TransitionGroup className={classes.topsters}>
          {topsters.map((item: TopsterTemplate) => (
            <CSSTransition key={item.id} classNames="fade" timeout={500}>
              <MiniTopsters
                {...item}
                handleClick={() => toTopster(item.id)}
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
          Delete this topsters?
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

export default withStyles(styles)(TopsterList);
