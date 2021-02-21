import { React } from "react";

const Credits = (props) => {
  return (
    <div
      z-index="3"
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        background: "#FFFFFF99",
        padding: "10px",
      }}
    >
      Photo by{" "}
      <a
        href={`${props.userURL}?utm_source=presentationKaraoke&utm_medium=referral`}
      >
        {props.userName}
      </a>
      , on{" "}
      <a href="https://unsplash.com/?utm_source=presentationKaraoke&utm_medium=referral">
        Unsplash
      </a>
      .
    </div>
  );
};

export default Credits;
