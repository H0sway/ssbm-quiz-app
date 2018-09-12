// Import dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

// Import SCSS
import './scss/main.scss';

// Import components
import Header from './components/Header';
import Quizzes from './components/Quizzes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Header />
          <Router>
            <Route exact path="/" component={Quizzes} />
              </Router>
        </Grid>
      </div>
    )
  }
};

export default App;
