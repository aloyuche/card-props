import React from "react";

const Boxs = (props) => {
  // const [on, setOn] = React.useState(props.on);

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id)}
    ></div>
  );
};

export default Boxs;
