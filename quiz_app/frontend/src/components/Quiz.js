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
    const route = this.props.currentQuiz
    console.log(route);
    axios({
      method: 'GET',
      url: `/api/quizzes/${route}`
    })
    .then(data => {
      this.setState({
        dataLoaded: true,
        quiz: data.data[0].id
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="Quiz">
        {this.state.dataLoaded ? <Questions quiz={this.state.quiz} /> : <p>Loading</p>}
        <button onClick={this.props.deloadQuiz}>Quiz List</button>
      </div>
    )
  }
}

export default Quiz;
