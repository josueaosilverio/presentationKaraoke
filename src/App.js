import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Slide from './views/Slide'
import Settings from './views/Settings';


const App = () => {
  return (

    <Router>
      <div>
        <Switch>
          <Route path="/presentation" component={Slide}>
          </Route>
          <Route path="/" component={Settings}>
          </Route>
        </Switch>
      </div>
    </Router >
  )

}
export default App;