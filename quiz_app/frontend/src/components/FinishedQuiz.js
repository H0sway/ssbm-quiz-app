import React from 'react';
import axios from 'axios';

const FinishedQuiz = (props) => {
  return (
    <div className="FinishedQuiz">
      <h3>CONGRATULATIONS</h3>
      <p>You answered {props.correctAnswers} out of {props.questionsAnswered} correct!</p>
    </div>
  )
}

export default FinishedQuiz;
