import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Routing App</title></Helmet>
        <div className='instruction container'>
            <h1>How to Do The Quiz ?</h1>
            <p className="begin">Instructions of Quiz:</p>
            <ul className="browser-default" id="main-list">
                <li>Select the kind of product you have questions</li>
                <li>Select the category of service you want</li>
                <li>Clarrify the warranty of your product</li>
            </ul>
            <p className="begin2">Tips:</p>
            <ul className="browser-default2" >
                <li>    1.Click Previous and Next to check adjacent questoins </li>
                <li>    2.Click Quit to end quiz anytime you want</li>
                <li>    3.Warning: once quiz is ended, your selection would not be saved</li>
            </ul>
            <div>
                <span className="left"><Link to ="/">No take me back</Link></span>
                <span className="right"><Link to ="/quiz">Ok let's begin</Link></span>
            </div>
        </div>

    </Fragment>
);

export default QuizInstructions;