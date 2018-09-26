import React, { Component } from 'react';
import axios from 'axios';

class ThemAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      currentQuestion: this.props.questions,
      answers: [],
    }
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'api/answers/'
    })
    .then(data => {
      // Map out the answers, push the ones that correspond to the current question into an array and save it to state.
      let answers = [];
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].question === this.props.currentQuestion.id) {
          answers.push(data.data[i])
        }
      }
      // Randomizes the order of the answers in the array before saving it to state.
      answers = answers.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({
        dataLoaded: true,
        answers: answers
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  // When the component receives new props it checks to see if the previous question is the same as the current one before updating the answers.
  componentDidUpdate(prevProps) {
    if (this.props.currentQuestion !== prevProps.currentQuestion) {
      axios({
        method: 'GET',
        url: 'api/answers/'
      })
      .then(data => {
        let answers = [];
        for (let i = 0; i < data.data.length; i++) {
          if (data.data[i].question === this.props.currentQuestion.id) {
            answers.push(data.data[i])
          }
        }
        answers = answers.sort(function(a, b){return 0.5 - Math.random()});
        this.setState({
          dataLoaded: true,
          answers: answers
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
  renderAnswers() {
    return this.state.answers.map(answer => {
      return (
        <div key={answer.id} className="answer-div">
          <label>
            <input
              type="radio"
              value={answer.id.toString()}
              checked={this.props.selectedAnswer === answer.id.toString()}
              onChange={this.props.handleChange}
            />
            {answer.text}
          </label>
        </div>
      )
    })
  }
  renderCorrectAnswer() {
    return (
      <div className="answered">
        <div className="answer-text">
          {this.props.isCorrect ? <h4>CORRECT</h4> : <h4>FALSE</h4>}
          <p>{this.props.currentQuestion.explanation_text}</p>
        </div>
        <button className="next-button" onClick={this.props.nextQuestion}>Next Question</button>
      </div>
    )
  }
  renderQuestion() {
    return (
      <div>
        {
          this.props.isAnswered ?
            <div>
              {this.renderCorrectAnswer()}
            </div> :
            <div>
              <form onSubmit={this.props.answerQuestion}>
                {this.renderAnswers()}
                <button className="answer-button">Answer</button>
              </form>
            </div>
        }
      </div>
    )
  }
  render() {
    return (
      <div className="ThemAnswers">
        {
          this.state.dataLoaded ?
            <div>
              <h3>{this.props.currentQuestion.question_text}</h3>
              {this.renderQuestion()}
            </div> :
            <p>Loading</p>
        }
      </div>
    )
  }
}

export default ThemAnswers;
