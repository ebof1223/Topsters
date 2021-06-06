import { withStyles } from '@material-ui/styles';
import { classes } from 'istanbul-lib-coverage';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableAlbum from './DraggableAlbum';
import { AlbumStructure } from './interface';
import styles from './styles/DraggableToppingsListStyles';

interface Props {
  userToppings: AlbumStructure[];
  classes: {
    SearchContainer: string;
    SearchToppingsDescription: string;
    UserToppingsContainer: string;
  };
  setUserToppings: (input: AlbumStructure[]) => void;
}

const DraggableToppingsList = SortableContainer(
  ({ userToppings, setUserToppings, classes }: Props) => {
    return (
      <div className={classes.SearchContainer}>
        <div className={classes.UserToppingsContainer}>
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
        </div>
      </div>
    );
  }
);

export default withStyles(styles)(DraggableToppingsList);
