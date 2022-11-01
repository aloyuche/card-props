import React from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
      console.log("Setting up ---");
    }

    window.addEventListener("resize", watchWidth);
    return function () {
      console.log("Cleaning up");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <h2 style={{ textAlign: "center", color: "whitesmoke" }}>
      Window width: {windowWidth}{" "}
    </h2>
  );
};

export default WindowTracker;
