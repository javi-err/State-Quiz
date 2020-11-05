import React, { Component } from 'react'
import questions from '../../questions';
import Question from '../Question/question'
import Landing from '../Landing/Landing'

export class App extends Component {
  constructor(){
    super();


    
    this.state = {
      quizStarted : false,
      currentQuestionIndex : 0,
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

handleButtonClick = (e) => {
  e.preventDefault();
  }


  
  render() {
    if(this.state.quizStarted) { 
      return <Question />
  }
  else {
    return <Landing quizStarted={this.state.quizStarted} />
  }

  
}
}
export default App

