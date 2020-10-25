import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Landing from './components/landing';
import Signup from './components/signUp';
import Signin from './components/signIn';
import Todo from './components/list'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component = {Landing} />
          <Route exact path = '/signup' component = {Signup} />
          <Route exact path = '/signin' component = {Signin} />
          <Route exact path = '/list' component = {Todo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
