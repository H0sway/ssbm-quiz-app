import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const QuizList = (props) => {
  return (
    <div className="QuizList">
      <ul>
        {props.quizzes.map(quiz => {
          return (
            <LinkContainer key={quiz.id} to={`/${quiz.name}`}>
              <li>{quiz.name}</li>
            </LinkContainer>
          )
        })}
      </ul>
    </div>
  )
}

export default QuizList;
