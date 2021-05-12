import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableAlbum from "./DraggableAlbum";

const DraggableToppingsList = SortableContainer(
  ({ userToppings, setUserToppings }) => {
    return (
      <div style={{ height: "100%" }}>
        {userToppings.map((item, index) => (
          <DraggableAlbum
            cover={item.image[3]["#text"]}
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
