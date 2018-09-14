import React, { Component } from 'react';
import axios from 'axios';

import ThemAnswers from './ThemAnswers';

class AnswerQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      questionAnswered: false,
      currentQuestion: this.props.questions[0],
      questionsAnswered: 0,
      correctAnswers: 0,
      isAnswered: false,
      selectedAnswer: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }
  handleChange(event) {
    this.setState({
      selectedAnswer: event.target.value,
    });
    console.log(this.state.selectedAnswer);
  }
  answerQuestion(event) {
    event.preventDefault();
    if (this.state.selectedAnswer.correct === "true") {
      this.setState({
        correctAnswers: this.state.correctAnswers++,
        isAnswered: true,
        questionsAnswered: this.state.questionsAnswered++
      })
    }
    else {
      this.setState({
        isAnswered: true,
        questionsAnswered: this.state.questionsAnswered++
      })
    }
  }
  nextQuestion() {
    if (this.state.questionsAnswered === this.props.questions.length) {
      alert("You're at the end of the quiz. You got " + this.state.correctAnswers + " out of" + this.state.questionsAnswered + " correct.");
    }
    else {
      const int = this.state.currentQuestion.id
      this.setState({
        currentQuestion: this.props.questions[int],
        isAnswered: false,
      })
    }
  }
  render() {
    return (
      <div className="AnswerQuestion">
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
      </div>
    )
  }
}

export default AnswerQuestion;
