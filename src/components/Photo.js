import { React } from "react";

const Photo = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
      alt="imagem"
    ></div>
  );
};

export default Photo;
