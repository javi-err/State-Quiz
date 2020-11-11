import React, { Component } from 'react'



export class Landing extends Component {



    
    render() {

        



   

        return (
        
                <div className="page-container">
                    <div className="title">
                        <h1>United States Quiz App</h1>
                        <h6>Test your knowledge of the 50 states!</h6>
                    </div>
        
                    <div className="page-description-text">
                        This is a 10 question quiz on random trivia facts about the 50 states. Test to see how many you get correct!
                    </div>
        
        
                    <div className="button-containers">
                        <button onClick={this.props.handleQuizStart}>Start Quiz!</button>
                    </div>
                </div>
        )
    }
}



export default Landing
