import React, { useState, useEffect } from 'react';
import './App.css';
import { toJson } from 'unsplash-js';
import Unsplash from 'unsplash-js';
import { UNSPLASH_ID, UNSPLASH_SECRET } from '../src/constants';


const unsplash = new Unsplash({
  applicationId: UNSPLASH_ID,
  secret: UNSPLASH_SECRET
});


const App = () => {
  const [background, setBackground] = useState(null)
  const [userName, setUserName] = useState(null)
  const [screenNumber, setScreenNumber] = useState(null)
  let currentSlide = 0;

  useEffect(() => { fetch() }, []);

  function fetch() {
    unsplash.photos.getRandomPhoto({ count: "20" })
      .then(toJson)
      .then(json => {
        console.table(json);
        setBackground(json[0].urls.full);
        setUserName(json[0].user.name);
      }).catch(err => {
        console.log(err);
      })
  }

  function nextImage() {
    if (currentSlide < 20) {
      currentSlide++;
      setBackground(currentSlide);
      setUserName(currentSlide);
      randomNumber();
    }
    else{
      return "Ended";
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
    <div className="App" onClick={() => nextImage()} >
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
        Photo by {userName}, on Unsplash.
      </div>
    </div>
  )

}
export default App;
