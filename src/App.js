import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import Profile from './components/Profile/Profile';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/Post/:friendId">
          <Profile/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
