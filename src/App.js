import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
  
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
  
  );
}

export default App;

