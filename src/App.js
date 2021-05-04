// App.js
import React, { Component } from 'react';
import {HashRouter as Router } from 'react-router-dom';
import Navigation from './containers/Navigation';
import Container from './containers/Container';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Container />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
