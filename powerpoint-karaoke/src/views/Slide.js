import React, { useState, useEffect } from 'react';
import { toJson } from 'unsplash-js';
import Unsplash from 'unsplash-js';
import { UNSPLASH_ID, UNSPLASH_SECRET } from '../constants';


const unsplash = new Unsplash({
  applicationId: UNSPLASH_ID,
  secret: UNSPLASH_SECRET
});


const Slide = () => {
  const [background, setBackground] = useState(null)
  const [imageCol, setImageCol] = useState(null)
  const [userName, setUserName] = useState(null)
  const [userURL, setUserURL] = useState(null)
  const [screenNumber, setScreenNumber] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(null)

  useEffect(() => { fetch() }, []);

  function fetch() {
    unsplash.photos.getRandomPhoto({ count: "20" })
      .then(toJson)
      .then(json => {
        setImageCol(json);
        setBackground(json[0].urls.full);
        setUserName(json[0].user.name);
        setUserURL(json[0].user.links.html);
        setCurrentSlide(0);
        console.log(json)
      }).catch(err => {
        console.log(err);
      })
  }

  function nextImage() {
    setCurrentSlide(currentSlide + 1)
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