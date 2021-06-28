import { AlbumTemplate } from '../interface';
import { withStyles } from '@material-ui/styles';
import styles from './create-styles/ResultsStyles';
import ResultAlbum from './ResultAlbum';

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
  const addToToppings = (itemIdx: number) => {
    console.log(results[itemIdx]);
    if (
      newTopsters.some(
        (item: AlbumTemplate) => item.name === results[itemIdx].name
      )
    ) {
      console.log('DUPLICATE ERROR');
      return;
    }
    if (newTopsters.length > 8) {
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
      <div className={classes.resultsContainer}>
        {results.map((item: AlbumTemplate, index: number) => (
          <ResultAlbum
            key={`${item.name}-result`}
            onClick={() => addToToppings(index)}
            cover={item.image[3]['#text']}
          />
        ))}
      </div>
    </>
  );
};

export default withStyles(styles)(Results);
