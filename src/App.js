import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';

function App() {
  return (
  
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
        </Switch>
      </BrowserRouter>
  
  );
}

export default App;

