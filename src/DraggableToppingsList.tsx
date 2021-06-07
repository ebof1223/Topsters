import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableAlbum from './DraggableAlbum';
import { AlbumStructure } from './interface';
import styles from './styles/DraggableToppingsListStyles';

interface Props {
  userToppings: AlbumStructure[];
  classes: {
    UserToppingsContainer: string;
  };
  setUserToppings: (input: AlbumStructure[]) => void;
}

const DraggableToppingsList = SortableContainer(
  ({ userToppings, setUserToppings, classes }: Props) => {
    return (
      <Paper elevation={3} className={classes.UserToppingsContainer}>
        {userToppings.map((item, index) => (
          <DraggableAlbum
            cover={item.image[3]['#text']}
            key={`${item.name}-topping`}
            index={index}
            onClick={() =>
              setUserToppings(
                userToppings.filter((item) => item !== userToppings[index])
              )
            }
          />
        ))}
      </Paper>
    );
  }
);

export default withStyles(styles)(DraggableToppingsList);
