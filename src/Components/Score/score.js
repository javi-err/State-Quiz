import React from 'react'

const score = (props) => {
    return (
        <div className="score-container">
            <span className='correct'>Correct: {props.correct}</span> <br />
            <span className='wrong'>Wrong: {props.wrong}</span>
            
        </div>
    )
}

export default score