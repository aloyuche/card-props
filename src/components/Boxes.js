import React from "react";
import box from "./box";
import Boxs from "./Boxs";
// import theBox from "../theBox";

const Boxes = () => {
  const [squares, setSquare] = React.useState(box);

  function toggle(id) {
    setSquare((prevSquares) => {
      // const newSquare = [];
      // for (let i = 0; i < prevSquares.length; i++) {
      //   const currentSquare = prevSquares[i];
      //   if (currentSquare.id === id) {
      //     const updateSquare = {
      //       ...currentSquare,
      //       on: !currentSquare.on,
      //     };
      //     newSquare.push(updateSquare);
      //   } else {
      //     newSquare.push(currentSquare);
      //   }
      // }

      //This can be done like
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Boxs key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));
  return <div>{squareElements}</div>;
};

export default Boxes;
