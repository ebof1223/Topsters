import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableAlbum from './DraggableAlbum';
import { AlbumTemplate } from '../interface';
import styles from './DraggableFieldStyles';
import DoublyLinkedList from 'dbly-linked-list';

type Node = {
  data: AlbumTemplate[] | null;
  next: AlbumTemplate[] | null;
  prev: AlbumTemplate[] | null;
};

interface Props {
  newTopsters: AlbumTemplate[];
  classes: {
    newTopstersContainer: string;
    record: string;
  };
  setNewTopsters: (input: AlbumTemplate[]) => void;
  newTopstersHistory: DoublyLinkedList | any;
  setCurrentNode: (input: {}) => void;
  currentNode:
    | {
        data: Node;
        next: Node;
        prev: Node;
      }
    | any;
  nodesFromTail: number;
  setNodesFromTail: (input: number) => void;
}

const DraggableTopsterContainer = SortableContainer(
  ({
    newTopsters,
    setNewTopsters,
    classes,
    newTopstersHistory,
    setCurrentNode,
    currentNode,
    nodesFromTail,
    setNodesFromTail,
  }: Props) => {
    return (
      <Paper elevation={3} className={classes.newTopstersContainer}>
        {newTopsters.map((item, index) => (
          <DraggableAlbum
            cover={item.image[3]['#text']}
            key={`${item.name}-topping`}
            index={index}
            onClick={() => {
              let newToppings = newTopsters.filter(
                (item) => item !== newTopsters[index]
              );
              newTopstersHistory.topstersInsert(
                currentNode,
                newToppings,
                newTopstersHistory,
                nodesFromTail
              );
              setNodesFromTail(0);
              setNewTopsters(newToppings);
              setCurrentNode(newTopstersHistory.getTailNode());
            }}
          />
        ))}
      </Paper>
    );
  }
);

export default withStyles(styles)(DraggableTopsterContainer);
