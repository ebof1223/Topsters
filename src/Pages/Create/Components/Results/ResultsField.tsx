import { AlbumTemplate } from '../interface';
import { withStyles } from '@material-ui/styles';
import styles from './ResultsFieldStyles';
import ResultAlbum from './ResultsItem';
import { useState } from 'react';
import TopsterDuplicateSnackBar from '../SnackBars/TopsterDuplicate';
import TopsterExceededSnackBar from '../SnackBars/TopsterAlbumCountExceeded';

interface Props {
  classes: {
    root: string;
    resultsContainer: string;
  };
  setNewTopsters: (args: AlbumTemplate[]) => void;
  newTopsters: AlbumTemplate[];
  currentNode: {
    data: Node;
    next: Node;
    prev: Node;
  };
  newTopstersHistory: any;
  nodesFromTail: number;
  setNodesFromTail: (input: number) => void;
  setCurrentNode: (input: {}) => void;
  setIsLoading: (input: boolean) => void;
  results: AlbumTemplate[];
}

const Results: React.FC<Props> = ({
  classes,
  setNewTopsters,
  newTopsters,
  currentNode,
  setCurrentNode,
  newTopstersHistory,
  nodesFromTail,
  setNodesFromTail,
  results,
}) => {
  const [duplicateError, setDuplicateError] = useState(false);
  const [exceededError, setExceededError] = useState(false);
  const addToToppings = (itemIdx: number) => {
    console.log(results[itemIdx]);
    if (
      newTopsters.some(
        (item: AlbumTemplate) => item.name === results[itemIdx].name
      )
    ) {
      console.log('DUPLICATE ERROR');
      setDuplicateError(true);
      return;
    }
    if (newTopsters.length > 8) {
      setExceededError(true);
      console.log('EXCEEDED MAX TOPPINGS VALUE');
      return;
    }

    let newToppings = [...newTopsters, results[itemIdx]];
    newTopstersHistory.topstersInsert(
      currentNode,
      newToppings,
      newTopstersHistory,
      nodesFromTail
    );
    setNodesFromTail(0);
    setNewTopsters(newToppings);
    setCurrentNode(newTopstersHistory.getTailNode());
  };

  return (
    <>
      <TopsterDuplicateSnackBar
        duplicateError={duplicateError}
        setDuplicateError={setDuplicateError}
      />
      <TopsterExceededSnackBar
        exceededError={exceededError}
        setExceededError={setExceededError}
      />
      <div className={classes.resultsContainer}>
        {results.map((item: AlbumTemplate, index: number) => (
          <ResultAlbum
            key={`${item.name}-${item.artist}-result`}
            onClick={() => addToToppings(index)}
            cover={item.image[3]['#text']}
          />
        ))}
      </div>
    </>
  );
};

export default withStyles(styles)(Results);
