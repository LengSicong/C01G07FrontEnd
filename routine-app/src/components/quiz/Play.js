import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import M from 'materialize-css';

import questions from '../../questions.json';
import isEmpty from '../../utils/is-empty'

class Play extends Component {
    constructor (props){
        super(props);
        this.state = {
            questions: questions,
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: "",
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            nextButtonDisabled: false,
            previousButtonDisabled: true
        };
    }

    componentDidMount () {
        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
        let {currentQuestionIndex} = this.state;
        if (!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberOfQuestions: questions.length,
            }, () => {
                this.handleDisableButton();
            });
        }

    }

    handleOptionClick = (e) => {
        M.toast({
            html: e.target.innerHTML + ' Clicked!'
        });
        var info = e.target.innerHTML;
        this.setState(prevState => ({
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
            answer: prevState.answer + "->" + info
        }), () => {
            if (this.state.nextQuestion === undefined){
                this.endGame();
            }else{
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
            }
        });

    }

    handleNextButtonClick = () => {
        if (this.state.nextQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex + 1
            }), () => {
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
            })
        }
    };

    handlePreviousButtonClick = () => {
        if (this.state.previousQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex - 1
            }), () => {
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
            })
        }
    };

    handleQuitButtonClick = () => {
        if (window.confirm('Are you sure you want to quit?')){
            this.props.history.push('/');
        }
    }


    handleButtonClick = (e) => {
        switch (e.target.id) {
            case 'next-button':
                this.handleNextButtonClick();
                break;
            case 'previous-button':
                this.handlePreviousButtonClick();
                break;
            case 'quit-button':
                this.handleQuitButtonClick();
                break;

            default:
                break;
        }
    };

    handleDisableButton = () => {
        if (this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0) {
            this.setState({
                previousButtonDisabled: true
            });
        } else {
            this.setState({
                previousButtonDisabled: false
            })
        }

        if (this.state.nextQuestion === undefined || this.state.nextQuestionIndex + 1 === this.state.numberOfQuestions) {
            this.setState({
                nextButtonDisabled: true
            });
        } else {
            this.setState({
                nextButtonDisabled: false
            })
        }
    };

    endGame = () => {
        alert('Quiz has ended!');
        const { state } = this;
        const playerStats = {
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,  
            answer: state.answer
        }
        setTimeout(() => {
            this.props.history.push('/quiz/quizSummary', playerStats);
        }, 1000);
    }

    render(){
        const { currentQuestion } = this.state;
        var classnames = require('classnames');
        return(
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                <div className="questions">
                    <div>
                        <p>
                            <span className="left">{this.state.currentQuestionIndex + 1} of {this.state.numberOfQuestions}</span>
                        </p>
                    </div>
                    <h5>{currentQuestion.question}</h5>
                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                    </div>
                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                    </div>

                    <dic className="button-container">
                        <button 
                            className={classnames('', {'disable': this.state.previousButtonDisabled})}
                            id="previous-button" 
                            onClick={this.handleButtonClick}>
                            Previous
                        </button>
                        <button 
                            className={classnames('', {'disable': this.state.nextButtonDisabled})}
                            id="next-button" 
                            onClick={this.handleButtonClick}>
                            Next
                        </button>
                        <button 
                            id="quit-button" 
                            onClick={this.handleButtonClick}>
                            Quit
                        </button>
                    </dic>
                </div>
            </Fragment>
        )
    }
}

export default Play;