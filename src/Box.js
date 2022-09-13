import React, { useState } from "react";

const Box = ({ id, backgroundColor, height, width, remove }) => {
  const handleRemove = () => {
    remove(id);
  };
  return (
    // <div>
    //     <p>{backgroundColor}</p>
    //     <p>{height}</p>
    //     <p>{width}</p>
    //     <p>{id}</p>
    // </div>
    <div
      style={{ backgroundColor: backgroundColor, height: height, width: width }}
    >
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Box;

// {id: 1, backgroundColor: "Blue", height: "50px", width: '50px'},
// {id: 2, backgroundColor: "Green", height: "50px", width: '50px'},
// {id: 3, backgroundColor: "Red", height: "50px", width: '50px'},
// {id: 4, backgroundColor: "Purple", height: "50px", width: '50px'},
// {id: 5, backgroundColor: "Yellow", height: "50px", width: '50px'}
