import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import About from './containers/about/About';
import MenuBar from './components/menubar/MenuBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MenuBar></MenuBar>
          <Route path="/about" component={About}/>
          <a href="#/">Home</a><a href="#/about">About</a>
          <blockquote>What do you think about this?</blockquote>
          <input type="text"/>
        </div>
      </Router>
    );
  }
}

export default App;
