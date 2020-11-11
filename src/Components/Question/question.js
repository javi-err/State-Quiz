import React from 'react'


export default function Question(props) {
    
    const isActive = {
        color: 'blue',

    }

    return (
        <div className="question-container">
            <div className="question-number">
                <span>Question {props.questionState.currentQuestion}</span>/10
                
            </div>
            
            <div className="question-text">
                {props.questionState.questionBank[0].questionText}
            </div>

            <div className="answer-buttons">
                {props.questionState.questionBank[0].answers.map(data  => {
                    if(data === props.questionState.questionBank[0].correctAnswer && props.questionState.answerSelected)  {
                        return <button onClick={props.handleButtonClick} key={data} style={isActive}>{data}</button>
                    }
                   return <button onClick={props.handleButtonClick} key={data} className={data}>{data}</button>
                })}

                
            </div>
        </div>
    )
}



