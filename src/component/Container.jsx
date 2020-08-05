import React, { Component } from 'react';
import axios from 'axios';
import Questions from '../component/Questions'

class Container extends Component{
    constructor(props){
        super(props);
        this.state={
            questionlist:[],
            name:"",
            step:0,
            startTest:false,
            correctQuestion:0
        }
    }
    componentDidMount(){
        axios
        .get('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
        .then((res)=>{
            this.setState({questionlist:res.data.results})
        })
        
    }
    handleAnswer=( iscorrect) =>{

    }
    handleTest = () => {
        this.setState({startTest : true})
    }
    render(){
        let {questionlist}=this.state;
        return(
            <div className="main_container">
            {!this.state.startTest&&<div className="form-group w-25 mx-auto mt-4">
                <input type="text" className="form-control "  placeholder="Enter Name" onChange={(e) => this.setState({name: e.target.value})}/>
                </div>}
                {this.state.name !=="" && !this.state.startTest&& <button className="btn btn-primary" onClick={this.handleTest}>Start Test</button>}
                {
                    this.state.startTest&&questionlist && questionlist.length > 0 && (
                        questionlist.map((data,index) =>{
                            return(
                                this.state.step === index &&
                                <Questions
                                 question={data}
                                 handleAnswer={this.handleAnswer}
                                 /> 
                            )
                        })
                    )
                }
                {this.state.startTest&&<div className="button-container">
                <button type="button" class="btn btn-primary" onClick={()=> this.setState({step : this.state.step + 1})}>NEXT</button>
                </div>}
            </div>
        )
    }
}

export default Container;