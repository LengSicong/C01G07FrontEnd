import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

class QuizSummary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            answers: ""
        }
    }

    componentDidMount () {
        const {state} = this.props.location;
        if (state) {
            this.setState({
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                answers: state.answer
            })
        }
    }

    render () {
        const { state } = this.props.location;
        let stats;
        if(state !== undefined) {
            stats = (
                <Fragment>
                    <h1>Quiz has ended!</h1>
                    <div className="container stats">
                        <span className="stat left">Your Requirment is:</span>
                        <span className="right">{this.state.answers}</span><br />
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to ="/">Connect</Link>
                            </li>
                            <li>
                                <Link to ="/begin/instructions">Quiz Agin</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        }else{
            stats = (
                <section>
                    <h1 className="no-stats">No stats availabe please take a quiz</h1>
                    <ul>
                        <li>
                            <Link to ="/">Back to Home</Link>
                        </li>
                        <li>
                            <Link to ="/begin/instructions">Take a Quiz</Link>
                        </li>
                    </ul>
                </section>
                );
        }
        return (
            <div className="quiz-summary">
                {stats}
            </div>
        );
    }
}



export default QuizSummary;