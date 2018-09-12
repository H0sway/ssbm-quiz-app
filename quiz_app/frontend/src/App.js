// Import dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

// Import SCSS
import './scss/main.scss';

// Import components
import Header from './components/Header';
import Quizzes from './components/Quizzes';
import Quiz from './components/Quiz';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Grid>
            <Header />
            <Route exact path="/" component={Quizzes} />
            <Route exact path="/:name" component={Quiz} />
          </Grid>
        </div>
      </Router>
    )
  }
};

export default App;
