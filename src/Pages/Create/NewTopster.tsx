import arrayMove from 'array-move';
import DoublyLinkedList from 'dbly-linked-list';
import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';

import { AlbumTemplate, TopsterTemplate } from '../../App/Constants/interface';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import DraggableField from './Components/TopsterGrid/DraggableField';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import NewTopsterNav from './Components/Navbar/Nav';
import Results from './Components/Results/ResultsField';
import Search from './Components/Search/Search';
import styles from './NewTopsterStyles';
import { UserContext } from '../Home/Sections/UserTopsters/Hooks/UserContext';
import { withStyles } from '@material-ui/core/styles';

interface Props {
  saveTopsters: (input: TopsterTemplate) => void;
  history: {
    goBack: () => void;
    push: (input: string) => void;
    location: any;
  };
  match: { params: any };
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
var newTopstersHistory: any;
const NewTopster: React.FC<Props> = ({
  saveTopsters,
  history,
  match,
  classes,
}) => {
  const topsters = useContext(UserContext);

  const retrieveTitle = () => {
    for (let [index, item] of topsters.entries()) {
      if (item.id === match.params.id) return topsters[index].title;
    }
  };

  const editTitle = match.params.id ? retrieveTitle() : '';

  const matchingAlbums = topsters.filter(
    (item: TopsterTemplate) => item.id === match.params.id
  );

  const editAlbums =
    match.params.id && matchingAlbums.length ? matchingAlbums[0].albums : [];

  const [openDrawer, setOpenDrawer] = useState(false);
  const [newTopsters, setNewTopsters] = useState(editAlbums);
  const [newTopsterName, setNewTopsterName] = useState(editTitle);
  const [currentNode, setCurrentNode] = useState(null);
  const [nodesFromTail, setNodesFromTail] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [userSearch, setUserSearch] = useState('');
  const [results, setResults] = useState<AlbumTemplate[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  useEffect(() => {
    newTopstersHistory = new DoublyLinkedList();
    newTopstersHistory.insert(editAlbums);
    setCurrentNode(newTopstersHistory.getTailNode());
    return () => {
      newTopstersHistory.clear();
    };
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
    let newTopster = arrayMove(newTopsters, oldIndex, newIndex);
    newTopstersHistory.topstersInsert(
      currentNode,
      newTopster,
      newTopstersHistory,
      nodesFromTail
    );
    setNodesFromTail(0);
    setNewTopsters(newTopster);
    setCurrentNode(newTopstersHistory.getTailNode());
  };

  return (
    <>
      <NewTopsterNav
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        history={history}
        setNewTopsters={setNewTopsters}
        saveTopsters={saveTopsters}
        newTopsterName={newTopsterName}
        newTopsters={newTopsters}
        setNewTopsterName={setNewTopsterName}
        match={match}
        newTopstersHistory={newTopstersHistory}
        setCurrentNode={setCurrentNode}
        currentNode={currentNode}
        nodesFromTail={nodesFromTail}
        setNodesFromTail={setNodesFromTail}
        isLoading={isLoading}
        noResults={noResults}
        openConfirm={openConfirm}
        setOpenConfirm={setOpenConfirm}
      />
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton
              onClick={() => setOpenDrawer(!openDrawer)}
              disabled={isLoading}
            >
              <ChevronLeftIcon color="primary" />
            </IconButton>
          </div>

          <Results
            setNewTopsters={setNewTopsters}
            newTopsters={newTopsters}
            currentNode={currentNode}
            newTopstersHistory={newTopstersHistory}
            nodesFromTail={nodesFromTail}
            setNodesFromTail={setNodesFromTail}
            setCurrentNode={setCurrentNode}
            setIsLoading={setIsLoading}
            results={results}
          />
          <Divider />
        </Drawer>
        <Search
          setUserSearch={setUserSearch}
          userSearch={userSearch}
          setIsLoading={setIsLoading}
          setResults={setResults}
          setOpenDrawer={setOpenDrawer}
          setNoResults={setNoResults}
          history={history}
          openConfirm={openConfirm}
          setOpenConfirm={setOpenConfirm}
        />

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: openDrawer,
          })}
        >
          <div className={classes.drawerHeader} />
          <div className={classes.background}>
            <DraggableField
              axis="xy"
              newTopsters={newTopsters}
              setNewTopsters={setNewTopsters}
              onSortStart={() => (document.body.style.cursor = 'grabbing')}
              onSortEnd={onSortEnd}
              newTopstersHistory={newTopstersHistory}
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

export default withStyles(styles, { withTheme: true })(NewTopster);
