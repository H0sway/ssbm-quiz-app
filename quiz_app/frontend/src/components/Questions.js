import React, { Component } from 'react';
import axios from 'axios';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: this.props.quiz,
      dataLoaded: false,
      questions: [],
      currentQuestion: ''
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
        questions: questions,
        currentQuestion: questions[0]
      })
      console.log(this.state);
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="Questions">
        {this.state.dataLoaded ? <p>Loaded</p> : <p>Loading</p>}
      </div>
    )
  }
}

export default Questions;
