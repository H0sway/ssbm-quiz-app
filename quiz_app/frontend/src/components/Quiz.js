import React, { Component } from 'react';
import axios from 'axios';

import Questions from './Questions';

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataLoaded: false,
      quiz: {},
      correct: 0
    }
  }
  componentDidMount() {
    const id = this.props.currentQuiz - 1;
    axios({
      method: 'GET',
      url: '/api/quizzes/'
    })
    .then(data => {
      this.setState({
        dataLoaded: true,
        quiz: data.data[id].id
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="Quiz">
        <button onClick={this.props.deloadQuiz}>Quiz List</button>
        {this.state.dataLoaded ? <Questions quiz={this.state.quiz} /> : <p>Loading</p>}
      </div>
    )
  }
}

export default Quiz;
