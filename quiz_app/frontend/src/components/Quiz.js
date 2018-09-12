import React, { Component } from 'react';
import axios from 'axios';

import Questions from './Questions';

class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      dataLoaded: false,
      quiz: {},
      correct: 0
    }
  }
  componentDidMount() {
    const route = this.props.match.params.name.toLowerCase()
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
      </div>
    )
  }
}

export default Quiz;
