import React, { Component } from 'react';
import axios from 'axios';

import QuizList from './QuizList';

class Quizzes extends Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      quizzes: []
    }
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/quizzes'
    })
    .then(data => {
      this.setState({
        dataLoaded: true,
        quizzes: data.data,
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="Quizzes">
        {this.state.dataLoaded ? <QuizList quizzes={this.state.quizzes} /> : <p>Loading</p>}
      </div>
    )
  }
}

export default Quizzes;
