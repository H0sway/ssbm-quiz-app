// Import dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

// Import SCSS
import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Mom!</h1>
      </div>
    )
  }
};

export default App;
