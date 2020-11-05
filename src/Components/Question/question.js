import React from 'react'
import questions from '../../questions'

export default function Question(props) {

    return (
        <div className="question-container">
            <div className="question-number">
                <span>Question {props.currentQuestion}</span>/10
                
            </div>
            
            <div className="question-text">
                {questions[0].questionText}
            </div>

            <div className="answer-buttons">
                {questions[0].answers.map(data  => {
                   return <button onClick={props.handleButtonClick} className="answers">{data}</button>
                })}
            </div>
        </div>
    )
}



