import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableAlbum from './DraggableAlbum';
import { AlbumStructure } from './interface';
import styles from './styles/DraggableToppingsListStyles';
import DoublyLinkedList from 'dbly-linked-list';

type Node = {
  data: AlbumStructure[] | null;
  next: AlbumStructure[] | null;
  prev: AlbumStructure[] | null;
};

interface Props {
  userToppings: AlbumStructure[];
  classes: {
    UserToppingsContainer: string;
    record: string;
  };
  setUserToppings: (input: AlbumStructure[]) => void;
  userToppingsHistory: DoublyLinkedList | any;
  setCurrentNode: (input: {}) => void;
  ////FIX
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

const DraggableToppingsList = SortableContainer(
  ({
    userToppings,
    setUserToppings,
    classes,
    userToppingsHistory,
    setCurrentNode,
    currentNode,
    nodesFromTail,
    setNodesFromTail,
  }: Props) => {
    return (
      <>
        <Paper elevation={3} className={classes.UserToppingsContainer}>
          {userToppings.map((item, index) => (
            <DraggableAlbum
              cover={item.image[3]['#text']}
              key={`${item.name}-topping`}
              index={index}
              onClick={() => {
                let newToppings = userToppings.filter(
                  (item) => item !== userToppings[index]
                );
                userToppingsHistory.toppingsInsert(
                  currentNode,
                  newToppings,
                  userToppingsHistory,
                  nodesFromTail
                );
                setNodesFromTail(0);
                setUserToppings(newToppings);
                setCurrentNode(userToppingsHistory.getTailNode());
              }}
            />
          ))}
        </Paper>
      </>
    );
  }
);

export default withStyles(styles)(DraggableToppingsList);
