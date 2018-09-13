import React, { Component } from 'react';
import axios from 'axios';

import AnswerQuestion from './AnswerQuestion';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: this.props.quiz,
      dataLoaded: false,
      questions: []
    }
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'api/questions'
    })
    .then(data => {
      let questions = [];
      for (let i = 0; i < data.data.length; i ++) {
        if (data.data[i].quiz === this.state.quiz) {
          questions.push(data.data[i]);
        }
      }
      this.setState({
        dataLoaded: true,
        questions: questions
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="Questions">
        {this.state.dataLoaded ? <AnswerQuestion questions={this.state.questions} /> : <p>Loading</p>}
      </div>
    )
  }
}

export default Questions;
