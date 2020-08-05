import React, { Component } from 'react';
import Axios from 'axios';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion:[],
            acceptingAnswers:true,
            score:0,
            questionCounter:0,
            availableQuestions:[]
        }
    }
    render() {
        const { question, handleAnswer } = this.props;
        return (
            <div>
            <div className="question_container">
                <h1>{question.question}</h1>
                {
                    question.incorrect_answers&&question.incorrect_answers.length>0&&
                    question.incorrect_answers.map((data, index) => {
                        return(
                            <div class="radio option-container" key={index}>
                              <label className="option-text" onChange={handleAnswer(false)}><input type="radio" className="radio-prefix" name="optradio" checked />{data}</label>
                            </div>
                        )
                    })
                     
                }
                
                <div class="radio option-container">
                    <label className="option-text"><input type="radio" className="radio-prefix" name="optradio" onChange={handleAnswer(true)}/>{question.correct_answer}</label>
                </div>
                
            </div>
            </div>
        )
    }
}
export default Questions;