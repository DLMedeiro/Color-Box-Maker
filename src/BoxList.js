import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 } from "uuid";

const BoxList = () => {
  const INITIAL_STATE = [
    { id: v4(), backgroundColor: "Blue", height: "50px", width: "50px" },
    { id: v4(), backgroundColor: "Green", height: "50px", width: "50px" },
  ];

  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addItem = (id, backgroundColor, height, width) => {
    setBoxes((boxes) => [...boxes, { id, backgroundColor, height, width }]);
  };
  const remove = (id) => {
    setBoxes(boxes.filter((b) => b.id !== id));
  };

  // const boxes = [
  //         {id: 1, backgroundColor: "Blue", height: "50px", width: '50px'},
  //         {id: 2, backgroundColor: "Green", height: "50px", width: '50px'}
  //     ]

  // const add = (box) => {
  //     console.log("Adding a new box")
  // }

  return (
    <div>
      <NewBoxForm addItem={addItem} />
      <div>
        {boxes.map(({ id, backgroundColor, height, width }) => (
          <Box
            id={id}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            remove={remove}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
