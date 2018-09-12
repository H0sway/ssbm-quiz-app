import React, { Component } from 'react';
import axios from 'axios';

class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      dataLoaded: false,
      quiz: [],
      currentQuestion: '',
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
        quiz: data.data
      })
      console.log(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="Quiz">
        {this.state.dataLoaded ? <p>Loaded</p> : <p>Loading</p>}
      </div>
    )
  }
}

export default Quiz;
