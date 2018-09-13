import React from 'react';

const QuizList = (props) => {
  return (
    <div className="QuizList">
      <ul>
        {props.quizzes.map(quiz => {
          return (
            <li key={quiz.id} name={quiz.name} onClick={props.loadQuiz}>{quiz.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default QuizList;
