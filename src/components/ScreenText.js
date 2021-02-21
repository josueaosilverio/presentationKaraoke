import React from "react";

const ScreenText = (props) => {
  return (
    <div
      z-index="2"
      style={{
        position: "absolute",
        color: "white",
        WebkitTextStroke: "3px black",
        fontSize: "12rem",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {props.screenNumber}
    </div>
  );
};

export default ScreenText;
