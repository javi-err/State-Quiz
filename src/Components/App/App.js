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
      wrongAnswer : 0,
      
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

  if(this.state.currentQuestion <= 10){
    this.setState({
      answerSelected: true,
    })

  if(answer === this.state.questionBank[0].correctAnswer) {
      this.setState({
        correctCount : this.state.correctCount + 1,
      })
      
  }
  else {
    this.setState({
      wrongAnswer: this.state.wrongAnswer + 1,
    })
  }


}
  

  // this.setState({
  //   currentQuestion: this.state.currentQuestion + 1,
  //   answeredQuestions : this.state.questionBank.shift(),
  //   questionBank : this.state.questionBank,
  // })


  }

handleQuizStart = (e) => {
  e.preventDefault()

  this.setState({
    quizStarted : true,
    questionBank : this.shuffler(questions)
  })

}


  
  render() {
    if(this.state.quizStarted) { 
      return <Question questionState={this.state} handleButtonClick={this.handleButtonClick}/>
  }
  else {
    return <Landing handleQuizStart={this.handleQuizStart} />
  }

  
}
}
export default App

