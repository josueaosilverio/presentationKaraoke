import React from 'react';
import './App.css';
import { toJson } from 'unsplash-js';
import Unsplash from 'unsplash-js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundNew: "https://www.placecage.com/c/200/300"
    };
  }

  
  componentWillMount() {
    const unsplash = new Unsplash({
      applicationId: "6107a66a250be4b140abbcbbb3ebcec3652af029a91dffa091c9e627d9e7bc06",
      secret: "55074a7b3c1795a758e896e88dbbe1ea94ae59334b946c9017300cdd6716099c"
    });
  
    unsplash.photos.getRandomPhoto({query:"videogame"})
      .then(toJson)
      .then(json => {
        console.table(json.urls);
        this.setState({ backgroundNew: json.urls.small });
      })
  }


  render(){
    return( <div className="App">
    <img src={this.state.backgroundNew} alt="imagem"></img>
  </div>)
  };
}

export default App;