import { withStyles } from '@material-ui/core/styles';
import { AlbumStructure, ToppingsStructure } from './interface';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import SaveButton from './SaveButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from './styles/NewToppingsFormNavStyles';
import BackButton from './BackButton';
import DoublyLinkedList from 'dbly-linked-list';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorIcon from '@material-ui/icons/Error';
import Tooltip from '@material-ui/core/Tooltip';

type Node = {
  data: AlbumStructure[] | null;
  next: AlbumStructure[] | null;
  prev: AlbumStructure[] | null;
};

interface Props {
  classes: {
    root: string;
    hide: string;
    appBar: string;
    appBarShift: string;
    menuButton: string;
    btnContainer: string;
  };
  open: boolean;
  setOpen: (input: boolean) => void;
  history: {
    push: (input: string) => void;
  };
  match: { params: any };
  setUserToppings: (args: object) => void;
  userToppings: AlbumStructure[] | undefined;
  toppings: ToppingsStructure[];
  saveToppings: (input: ToppingsStructure) => void;
  userToppingsName: string;
  setUserToppingsName: (input: string) => void;
  userToppingsHistory: DoublyLinkedList;
  setCurrentNode: (input: {}) => void;
  currentNode: {
    data: Node;
    next: Node;
    prev: Node;
  };
  nodesFromTail: number;
  setNodesFromTail: (input: number) => void;
  isLoading: boolean;
  noResults: boolean;
}

const NewToppingsFormNav: React.FC<Props> = ({
  classes,
  open,
  setOpen,
  history,
  setUserToppings,
  userToppings,
  toppings,
  saveToppings,
  userToppingsName,
  setUserToppingsName,
  match,
  userToppingsHistory,
  setCurrentNode,
  currentNode,
  nodesFromTail,
  setNodesFromTail,
  isLoading,
  noResults,
}) => {
  // console.log('history', userToppingsHistory);
  // console.log('current', currentNode);
  // console.log(nodesFromTail);
  const handleUndo = () => {
    setUserToppings(currentNode.prev.data);
    setCurrentNode(currentNode.prev);
    setNodesFromTail(nodesFromTail + 1);
  };
  const handleRedo = () => {
    setUserToppings(currentNode.next.data);
    setCurrentNode(currentNode.next);
    setNodesFromTail(nodesFromTail - 1);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap></Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <ChevronRightIcon color="primary" />
          </IconButton>
        </Toolbar>
        <div className={classes.btnContainer}>
          <Tooltip title="Undo">
            <Button
              onClick={handleUndo}
              disabled={currentNode && currentNode.prev === null}
            >
              <UndoIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Redo">
            <Button
              onClick={handleRedo}
              disabled={currentNode && currentNode.next === null}
              style={{ marginRight: '5rem' }}
            >
              <RedoIcon />
            </Button>
          </Tooltip>
          {isLoading && (
            <CircularProgress style={{ position: 'absolute', right: '18%' }} />
          )}
          {!isLoading && noResults && (
            <Tooltip title="No results found. Please try again.">
              <ErrorIcon
                style={{ position: 'absolute', right: '18%' }}
                fontSize="large"
              />
            </Tooltip>
          )}
          <BackButton
            userToppings={userToppings}
            history={history}
            setCurrentNode={setCurrentNode}
            userToppingsHistory={userToppingsHistory}
          />
          <SaveButton
            userToppingsName={userToppingsName}
            setUserToppingsName={setUserToppingsName}
            userToppings={userToppings}
            toppings={toppings}
            history={history}
            saveToppings={saveToppings}
            match={match}
            setCurrentNode={setCurrentNode}
            userToppingsHistory={userToppingsHistory}
          />
        </div>
      </AppBar>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(NewToppingsFormNav);
