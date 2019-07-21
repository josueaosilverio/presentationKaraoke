import React, { useState, useEffect } from 'react';
import './App.css';
import { toJson } from 'unsplash-js';
import Unsplash from 'unsplash-js';
import {UNSPLASH_ID, UNSPLASH_SECRET} from '../src/constants';


const unsplash = new Unsplash({
  applicationId: UNSPLASH_ID,
  secret: UNSPLASH_SECRET
});


const App = () => {
  const [background, setBackground] = useState(null)
  const [userName, setUserName] = useState(null)

  useEffect(() => {
    fetch()
  }, []);

  function fetch() {
    unsplash.photos.getRandomPhoto({ query: "videogame" })
      .then(toJson)
      .then(json => {
        console.table(json);
        setBackground(json.urls.full);
        setUserName(json.user.name);
      }).catch(err => {
        console.log(err);
      })
  }


  if (!background) return 'loading...';

  return (
    <div className="App"  onClick={() => fetch()} >
      <div style={{
        backgroundImage: `url(${background})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', width: "100vw", height: "100vh"
      }} alt="imagem"></div>
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
