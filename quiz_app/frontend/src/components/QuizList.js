import React from 'react';

const QuizList = (props) => {
  return (
    <div className="QuizList">
      <ul>
        {props.quizzes.map(quiz => {
          return (
            <div key={quiz.id}>
              <li name={quiz.name} id={quiz.id} onClick={props.loadQuiz}>{quiz.name}</li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default QuizList;
