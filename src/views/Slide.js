import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import Credits from "../components/Credits";
import Photo from "../components/Photo";
import ScreenText from "../components/ScreenText";

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_ID,
  secret: process.env.REACT_APP_UNSPLASH_SECRET,
});

const Slide = (props) => {
  const { topic = "", slideNumber = 20, slideTime = 30 } = props;

  const [background, setBackground] = useState(null);
  const [imageCol, setImageCol] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userURL, setUserURL] = useState(null);
  const [screenNumber, setScreenNumber] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(null);

  useEffect(() => {
    fetch();
  }, []);

  function fetch() {
    unsplash.photos
      .getRandomPhoto({ count: slideNumber, query: topic })
      .then(toJson)
      .then((json) => {
        setImageCol(json);
        setBackground(json[0].urls.full);
        setUserName(json[0].user.name);
        setUserURL(json[0].user.links.html);
        setCurrentSlide(0);
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function nextImage() {
    setCurrentSlide(currentSlide + 1);
    if (currentSlide < 20) {
      randomNumber();
      setBackground(imageCol[currentSlide].urls.full);
      setUserName(imageCol[currentSlide].user.name);
      console.log(currentSlide);
    }
  }

  function randomNumber() {
    let chance = Math.floor(Math.random() * 101);
    let percentageChance = Math.floor(Math.random() * 2);
    let number;

    if (chance < 20) {
      number = Math.floor(Math.random() * 101);

      if (percentageChance) {
        number = number.toString() + "%";
      }
    } else {
      number = "";
    }
    setScreenNumber(number);
  }

  if (!background) return "loading...";

  return (
    <div onClick={() => nextImage()}>
      <Photo background={background} />

      <ScreenText screenNumber={screenNumber} />

      <Credits userURL={userURL} userName={userName} />
    </div>
  );
};
export default Slide;
