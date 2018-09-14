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
      correctAnswers: 0,
      isAnswered: false,
      selectedAnswer: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
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
  handleChange(event) {
    this.setState({
      selectedAnswer: event.target.value,
    });
    console.log(this.state.selectedAnswer);
  }
  answerQuestion(event) {
    event.preventDefault();
    // if (this.state.selectedAnswer.correct === "true") {
    //   this.setState({
    //     correctAnswers: this.state.correctAnswers++,
    //     isAnswered: true
    //   })
    // }
    // else {
    //   this.setState({
    //     isAnswered: true
    //   })
    // }
    console.log(this.state.selectedAnswer);
  }
  renderAnswers() {
    return this.state.answers.map(answer => {
      return (
        <div key={answer.id} className="answer-div">
          <label>
            <input
              type="radio"
              value={answer.id.toString()}
              checked={this.state.selectedAnswer === answer.id.toString()}
              onChange={this.handleChange}
            />
            {answer.text}
          </label>
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
      <div>
        {
          this.state.isAnswered ?
            <div>
              {this.renderCorrectAnswer()}
            </div> :
            <div>
              <form onSubmit={this.answerQuestion}>
                {this.renderAnswers()}
                <button>Answer</button>
              </form>
            </div>
        }
      </div>
    )
  }
  render() {
    return (
      <div className="AnswerQuestion">
        {this.state.dataLoaded ?
          <div>
            <h3>{this.state.currentQuestion.question_text}</h3>
            {this.renderQuestion()}
          </div> :
          <p>Loading</p>}
      </div>
    )
  }
}

export default AnswerQuestion;
