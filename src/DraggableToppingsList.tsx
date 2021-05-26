import { SortableContainer } from 'react-sortable-hoc';
import DraggableAlbum from './DraggableAlbum';
import { AlbumStructure } from './interface';

interface Props {
  userToppings: AlbumStructure[];
  setUserToppings: (input: AlbumStructure[]) => void;
}

const DraggableToppingsList = SortableContainer(
  ({ userToppings, setUserToppings }: Props) => {
    return (
      <div style={{ height: '92.25vh' }}>
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
    );
  }
);

export default DraggableToppingsList;
