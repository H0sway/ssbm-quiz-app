import React, { Component } from 'react';
import axios from 'axios';

class AnswerQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      questionAnswered: false,
      currentQuestion: this.props.questions[0],
      answers: [],
      isAnswered: false
    }
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'api/answers/'
    })
    .then(data => {
      let answers = [];
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].question === this.state.currentQuestion.id) {
          answers.push(data.data[i])
        }
      }
      this.setState({
        dataLoaded: true,
        answers: answers
      })
      console.log(this.state.answers);
    })
    .catch(err => {
      console.log(err);
    })
  }
  renderAnswers() {
    return this.state.answers.map(answer => {
      return (
        <div key={answer.id} className="answer-div">
          <input type="radio" name="answer" value={answer.correct} />
          <label>{answer.text}</label>
        </div>
      )
    })
  }
  renderCorrectAnswer() {
    return (
      <div>
        <p>{this.state.currentQuestion.explanation_text}</p>
        <button>Next Question</button>
      </div>
    )
  }
  renderQuestion() {
    return (
      <form>
        <h3>{this.state.currentQuestion.question_text}</h3>
        {
          this.state.isAnswered ?
            <div>
              {this.renderCorrectAnswer()}
            </div>:
            <div>
              {this.renderAnswers()}
              <button>Answer</button>
          </div>
        }
      </form>
    )
  }
  render() {
    return (
      <div className="AnswerQuestion">
        {this.state.dataLoaded ? <div>{this.renderQuestion()}</div> : <p>Loading</p>}
      </div>
    )
  }
}

export default AnswerQuestion;
