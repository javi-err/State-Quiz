import React from 'react'
import Score from '../Score/score'


export default function Question(props) {
    
    const isActive = {
        color: 'blue',

    }

    const isAnswerCorrect = () => {
        if(props.questionState.isAnswerCorrect){
            return(
                <div className="answer-container">  
                <h1>Your answer was correct!</h1>
                    The correct answer is {props.questionState.questionBank[0].correctAnswer}.
                </div>
            )
        }
       else if(props.questionState.isAnswerCorrect === false) return(
            <div className="answer-container">  
            <h1>Your answer was wrong</h1>
                The correct answer is {props.questionState.questionBank[0].correctAnswer}.
            </div>
        )
    }

    const nextQuestion = () => {
        if(props.questionState.answerSelected) {
            return(
                <button className="btn" onClick={props.handleNextQuestion}>Next Question</button>
            )
        }
    }

    const hasAlreadyClicked = () => {
        if(props.questionState.answerSelected) {
            return null;
        }
        else {
            return props.handleButtonClick
        }
    }

    return (
        <>
        <Score correct={props.questionState.correctCount} wrong={props.questionState.wrongCount} />
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
                        return <button onClick={hasAlreadyClicked()} key={data} style={isActive} className={'answer btn'}>{data}</button>
                        
                    }
                   return <button onClick={hasAlreadyClicked()} key={data} className={`answer btn ${data}`}>{data}</button>
                })}
            </div>
            
            <>
                {isAnswerCorrect()}
                {nextQuestion()}
            </>
        </div>
        </>
    )
}



