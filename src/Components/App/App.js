import React, { Component, } from 'react'
import questions from '../../questions';
import Question from '../Question/question'
import Landing from '../Landing/Landing'


export class App extends Component {
  constructor(){
    super();

    
    this.state = {
      quizStarted : false,
      answerSelected : false,
      currentQuestion: 1,
      questionBank : [],
      answeredQuestions : [],
      correctCount : 0,
      wrongCount : 0,
      isAnswerCorrect: null,
      
    }
      
  }



shuffler = (arr) => {
  for(let i=arr.length - 1; i > 0; i--) {
    let newIndex; 
    let temp;

    newIndex = Math.floor(Math.random() * (i + 1));
    temp = arr[i]
    arr[i] = arr[newIndex];
    arr[newIndex] = temp;
  }
  return arr;
}

//Event Handlers

handleButtonClick = (e) => {
  e.preventDefault()
  const answer = e.target.innerHTML

  if(this.state.questionBank.length !== 0){
    this.setState({
      answerSelected: true,
    })

  if(answer === this.state.questionBank[0].correctAnswer) {
      this.setState({
        correctCount : this.state.correctCount + 1,
        isAnswerCorrect: true,
      })
      
  }
  else {
    this.setState({
      wrongCount: this.state.wrongCount + 1,
      isAnswerCorrect: false,
    })
  }
  

}

  
  }

handleQuizStart = (e) => {
  e.preventDefault()

  this.setState({
    quizStarted : true,
    questionBank : this.shuffler(questions)
  })

}

handleNextQuestion = (e) => {
  e.preventDefault()

    this.setState({
    currentQuestion: this.state.currentQuestion + 1,
    answeredQuestions : this.state.questionBank.shift(),
    questionBank : this.state.questionBank,
    isAnswerCorrect: null,
    answerSelected: false,
  })
}


  
  render() {
    if(this.state.quizStarted) { 
      return <Question questionState={this.state} handleButtonClick={this.handleButtonClick} handleNextQuestion={this.handleNextQuestion}/>
  }
  else {
    return <Landing handleQuizStart={this.handleQuizStart} />
  }

  
}
}
export default App

