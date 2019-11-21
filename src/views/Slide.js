import React, { useState, useEffect } from 'react';
import { toJson } from 'unsplash-js';
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_ID,
  secret: process.env.REACT_APP_UNSPLASH_SECRET
});


const Slide = (props) => {

  let {
    topic = "",
    slideNumber = 20,
    slideTime = 30,
  } = props;

  let params = new URLSearchParams(props.location.search);
  
  let tag = params.get("topic");
  topic = tag;
  
  tag = params.get("slideNumber");
  slideNumber = tag;

  tag = params.get("slideTime");
  slideTime = tag;


  const [background, setBackground] = useState(null)
  const [imageCol, setImageCol] = useState(null)
  const [userName, setUserName] = useState(null)
  const [userURL, setUserURL] = useState(null)
  const [screenNumber, setScreenNumber] = useState("Click to start")
  const [currentSlide, setCurrentSlide] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetch() }, []);

  function fetch() {
    unsplash.photos.getRandomPhoto({ count: slideNumber, query: topic })
      .then(toJson)
      .then(json => {
        setImageCol(json);
        setBackground(json[currentSlide].urls.full);
        setUserName(json[currentSlide].user.name);
        setUserURL(json[currentSlide].user.links.html);
        //console.log(json)
      }).catch(err => {
        //console.log(err);
      })
  }

  function nextImage() {
    setCurrentSlide(currentSlide + 1);
    if (currentSlide < 20) {
      randomNumber();
      setBackground(imageCol[currentSlide].urls.full);
      setUserName(imageCol[currentSlide].user.name);
      //console.log(currentSlide);
    } else {
      //console.log("End");
    }
    setTimeout(nextImage, slideTime * 1000)
  }

  function randomNumber() {
    let chance = Math.floor(Math.random() * 101);
    let percentageChance = Math.floor(Math.random() * 2);
    let number;

    if (chance < 20) {
      number = Math.floor(Math.random() * 101);

      if (percentageChance) {
        number = number.toString() + "%"
      }
    } else {
      number = "";
    }
    setScreenNumber(number);

  }


  if (!background) return 'loading...';

  return (
    <div onClick={() => nextImage()} >
      {/*Photo */}
      <div style={{
        backgroundImage: `url(${background})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', width: "100vw", height: "100vh"
      }} alt="imagem"></div>


      {/*Random Number or text*/}
      <div
        z-index="2"
        style={{
          position: 'absolute',
          color: 'white',
          WebkitTextStroke: "3px black", fontSize: "12rem",
          top: "50%", left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)"
        }} >
        {screenNumber}
      </div>

      {/*Photo credits*/}
      <div z-index="3" style={{
        position: 'absolute', left: 0, bottom: 0,
        background: '#FFFFFF99', padding: "10px",
      }}>
        Photo by <a href={`${userURL}?utm_source=presentationKaraoke&utm_medium=referral`}>{userName}</a>, on <a href="https://unsplash.com/?utm_source=presentationKaraoke&utm_medium=referral">Unsplash</a>.
      </div>
    </div>
  )

}
export default Slide;