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
  constructor() {
    super();
    this.state = {
      quizLoaded: false,
      currentQuiz: {}
    }
    this.loadQuiz = this.loadQuiz.bind(this);
    this.deloadQuiz = this.deloadQuiz.bind(this);
  }
  loadQuiz(event) {
    const currentQuiz = event.target.id;
    this.setState({
      quizLoaded: true,
      currentQuiz: currentQuiz
    })
  }
  deloadQuiz() {
    this.setState({
      quizLoaded: false,
      currentQuiz: {}
    })
  }
  render() {
    return (
      <div className="App">
        <Grid>
          <Header />
          {this.state.quizLoaded ?
            <Quiz
              deloadQuiz={this.deloadQuiz}
              currentQuiz={this.state.currentQuiz}
            />
          : <Quizzes
            loadQuiz={this.loadQuiz}
            />
          }
        </Grid>
      </div>
    )
  }
};

export default App;
