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
  const [backgroundNew, setBackgroundNew] = useState(null)

  useEffect(() => {
    fetch()
  }, []);

  function fetch() {
    unsplash.photos.getRandomPhoto({ query: "videogame" })
      .then(toJson)
      .then(json => {
        console.table(json);
        setBackgroundNew(json.urls.full);
      }).catch(err => {
        console.log(err);
      })
  }


  if (!backgroundNew) return 'loading....';

  return (
    <div className="App"  onClick={() => fetch()} >
      <div style={{
        backgroundImage: `url(${backgroundNew})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', width: "100vw", height: "100vh"
      }} alt="imagem"></div>
    </div>
  )
}
export default App;
