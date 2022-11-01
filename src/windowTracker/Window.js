import React from "react";
import WindowTracker from "./WindowTracker";

const Window = () => {
  const [show, setShow] = React.useState();

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="window-tracker">
      <button
        style={{
          background: "white",
          width: "80%",
          padding: "15px",
          borderRadius: "20px",
          color: "brown",
          cursor: "pointer",
          fontSize: "1.3rem",
          margin: "20px",
        }}
        onClick={toggle}
      >
        Toggle Window Tracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
};

export default Window;
