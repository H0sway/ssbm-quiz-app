import React, { Component } from 'react';
import axios from 'axios';

import ThemAnswers from './ThemAnswers';
import FinishedQuiz from './FinishedQuiz';

class AnswerQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      allAnswers: [],
      questionAnswered: false,
      currentQuestion: this.props.questions[0],
      questionsAnswered: 0,
      correctAnswers: 0,
      isAnswered: false,
      selectedAnswer: '',
      quizFinished: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'api/answers/'
    })
    .then(data => {
      this.setState({
        allAnswers: data.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  handleChange(event) {
    this.setState({
      selectedAnswer: event.target.value,
    });
  }
  answerQuestion(event) {
    event.preventDefault();
    let answer = this.state.allAnswers.filter(a => a.id === parseInt(this.state.selectedAnswer));
    if (answer[0].correct === true) {
      this.setState({
        correctAnswers: this.state.correctAnswers + 1,
        isAnswered: true,
        questionsAnswered: this.state.questionsAnswered + 1
      })
    }
    else {
      this.setState({
        isAnswered: true,
        questionsAnswered: this.state.questionsAnswered + 1
      })
    }
  }
  nextQuestion() {
    if (this.state.questionsAnswered === this.props.questions.length) {
      this.setState({
        quizFinished: true,
      })
    }
    else {
      const int = this.state.currentQuestion.id
      this.setState({
        currentQuestion: this.props.questions[int],
        isAnswered: false,
      })
    }
    console.log(this.state.correctAnswers);
  }
  render() {
    return (
      <div className="AnswerQuestion">
        {
          this.state.quizFinished ?
            <FinishedQuiz
              correctAnswers={this.state.correctAnswers}
              questionsAnswered={this.props.questions.length}
            /> :
            <ThemAnswers
              questionAnswered={this.state.questionAnswered}
              currentQuestion={this.state.currentQuestion}
              questionsAnswered={this.state.questionsAnswered}
              correctAnswers={this.state.correctAnswers}
              isAnswered={this.state.isAnswered}
              selectedAnswer={this.state.selectedAnswer}
              answerQuestion={this.answerQuestion}
              handleChange={this.handleChange}
              nextQuestion={this.nextQuestion}
            />
        }
      </div>
    )
  }
}

export default AnswerQuestion;
