import { AlbumTemplate } from '../interface';
import { withStyles } from '@material-ui/styles';
import styles from './create-styles/ResultsStyles';
import ResultAlbum from './ResultAlbum';

interface Props {
  classes: {
    root: string;
    resultsContainer: string;
  };
  setUserToppings: (args: AlbumTemplate[]) => void;
  userToppings: AlbumTemplate[];
  currentNode: {
    data: Node;
    next: Node;
    prev: Node;
  };
  userToppingsHistory: any;
  nodesFromTail: number;
  setNodesFromTail: (input: number) => void;
  setCurrentNode: (input: {}) => void;
  setIsLoading: (input: boolean) => void;
  results: AlbumTemplate[];
}

const Results: React.FC<Props> = ({
  classes,
  setUserToppings,
  userToppings,
  currentNode,
  setCurrentNode,
  userToppingsHistory,
  nodesFromTail,
  setNodesFromTail,
  results,
}) => {
  const addToToppings = (itemIdx: number) => {
    console.log(results[itemIdx]);
    if (
      userToppings.some(
        (item: AlbumTemplate) => item.name === results[itemIdx].name
      )
    ) {
      console.log('DUPLICATE ERROR');
      return;
    }
    if (userToppings.length > 8) {
      console.log('EXCEEDED MAX TOPPINGS VALUE');
      return;
    }

    let newToppings = [...userToppings, results[itemIdx]];
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
