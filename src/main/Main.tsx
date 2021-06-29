import { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TopsterTemplate } from '../interface';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './main-styles/Main-styles';
import UserTopsters from './UserTopsters';
import DeleteModal from './DeleteModal';
import Recommended from './Recommended';

interface Props {
  classes: {
    root: string;
    heading: string;
    OuterContainer: string;
    nav: string;
    Recommended: string;
    Fab: string;
    UserTopsters: string;
  };
  topsters: TopsterTemplate[];
  history: {
    goBack: () => void;
    push: (input: string) => void;
  };
  setTopsters: (input: TopsterTemplate[]) => void;
  recommended: any;
}

const TopsterList: React.FC<Props> = ({
  topsters,
  history,
  setTopsters,
  classes,
  recommended,
}) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(null);

  const toTopster = (id: string, type: string) => {
    type === 'recommended'
      ? history.push(`/recommended/${id}`)
      : history.push(`/topsters/${id}`);
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
                className={classes.Fab}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Link>
        </nav>
        <h1 style={{ color: '#fff', fontFamily: 'Merriweather, serif' }}>
          Recommended
        </h1>
        <TransitionGroup className={classes.Recommended}>
          {recommended.map((item: any) => (
            <CSSTransition key={item.id} classNames="fade" timeout={500}>
              <Recommended
                {...item}
                handleClick={() => toTopster(item.id, 'recommended')}
                id={item.id}
                deleteDialog={deleteDialog}
                setDeleteDialog={setDeleteDialog}
                setToBeDeleted={setToBeDeleted}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <TransitionGroup className={classes.UserTopsters}>
          {topsters.map((item: TopsterTemplate) => (
            <CSSTransition key={item.id} classNames="fade" timeout={500}>
              <UserTopsters
                {...item}
                handleClick={() => toTopster(item.id, 'userTopster')}
                id={item.id}
                deleteDialog={deleteDialog}
                setDeleteDialog={setDeleteDialog}
                setToBeDeleted={setToBeDeleted}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <DeleteModal
        handleDeleteConfirmation={handleDeleteConfirmation}
        deleteDialog={deleteDialog}
        setDeleteDialog={setDeleteDialog}
      />
    </div>
  );
};

export default withStyles(styles)(TopsterList);
