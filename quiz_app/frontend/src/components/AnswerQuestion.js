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
      isCorrect: false,
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
        isCorrect: true,
        correctAnswers: this.state.correctAnswers + 1,
        isAnswered: true,
        questionsAnswered: this.state.questionsAnswered + 1
      })
    }
    else {
      this.setState({
        isCorrect: false,
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
      const qList = this.props.questions;
      const currentQ = qList.indexOf(this.state.currentQuestion);
      const int = currentQ + 1;
      console.log(currentQ, int);
      this.setState({
        currentQuestion: this.props.questions[int],
        isAnswered: false,
      })
    }
  }
  render() {
    console.log(this.props.questions);
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
              isCorrect={this.state.isCorrect}
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
