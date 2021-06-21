import { useEffect, useState } from 'react';
import NewToppingsFormNav from './NewToppingsFormNav';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Search from './Search';
import DraggableToppingsList from './DraggableToppingsList';
import styles from './styles/NewToppingsFormStyles';
import { ToppingsStructure } from './interface';
import arrayMove from 'array-move';
import DoublyLinkedList from 'dbly-linked-list';

interface Props {
  saveToppings: (input: ToppingsStructure) => void;
  history: {
    push: (input: string) => void;
  };
  match: { params: any };
  toppings: ToppingsStructure[];
  classes: {
    root: string;
    hide: string;
    drawer: string;
    drawerPaper: string;
    drawerHeader: string;
    content: string;
    contentShift: string;
    background: string;
  };
}
const userToppingsHistory: any = new DoublyLinkedList();
const NewToppingsForm: React.FC<Props> = ({
  saveToppings,
  history,
  match,
  toppings,
  classes,
}) => {
  const retrieveTitle = () => {
    for (let [index, item] of toppings.entries()) {
      if (item.id === match.params.id) return toppings[index].title;
    }
  };
  const editTitle = match.params.id ? retrieveTitle() : '';
  let matchingAlbums = toppings.filter((item) => item.id === match.params.id);

  const editAlbums =
    match.params.id && matchingAlbums.length ? matchingAlbums[0].albums : [];

  const [open, setOpen] = useState(true);
  const [userToppings, setUserToppings] = useState(editAlbums);
  const [userToppingsName, setUserToppingsName] = useState(editTitle);
  const [currentNode, setCurrentNode] = useState(null);
  const [nodesFromTail, setNodesFromTail] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    userToppingsHistory.insert(editAlbums);
    setCurrentNode(userToppingsHistory.getTailNode());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    document.body.style.cursor = 'default';
    if (oldIndex === newIndex) return;
    let newToppings = arrayMove(userToppings, oldIndex, newIndex);
    userToppingsHistory.toppingsInsert(
      currentNode,
      newToppings,
      userToppingsHistory,
      nodesFromTail
    );
    setNodesFromTail(0);
    setUserToppings(newToppings);
    setCurrentNode(userToppingsHistory.getTailNode());
  };

  return (
    <>
      <NewToppingsFormNav
        open={open}
        setOpen={setOpen}
        history={history}
        setUserToppings={setUserToppings}
        toppings={toppings}
        saveToppings={saveToppings}
        userToppingsName={userToppingsName}
        userToppings={userToppings}
        setUserToppingsName={setUserToppingsName}
        match={match}
        userToppingsHistory={userToppingsHistory}
        setCurrentNode={setCurrentNode}
        currentNode={currentNode}
        nodesFromTail={nodesFromTail}
        setNodesFromTail={setNodesFromTail}
        isLoading={isLoading}
      />
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => setOpen(!open)}>
              <ChevronLeftIcon color="primary" />
            </IconButton>
          </div>
          <Divider />
          <Search
            setUserToppings={setUserToppings}
            userToppings={userToppings}
            currentNode={currentNode}
            userToppingsHistory={userToppingsHistory}
            nodesFromTail={nodesFromTail}
            setNodesFromTail={setNodesFromTail}
            setCurrentNode={setCurrentNode}
            setIsLoading={setIsLoading}
          />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div className={classes.background}>
            <DraggableToppingsList
              axis="xy"
              userToppings={userToppings}
              setUserToppings={setUserToppings}
              onSortStart={() => (document.body.style.cursor = 'grabbing')}
              onSortEnd={onSortEnd}
              userToppingsHistory={userToppingsHistory}
              setCurrentNode={setCurrentNode}
              currentNode={currentNode}
              nodesFromTail={nodesFromTail}
              setNodesFromTail={setNodesFromTail}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(NewToppingsForm);
