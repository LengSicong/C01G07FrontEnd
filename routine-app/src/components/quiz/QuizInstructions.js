import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Routing App</title></Helmet>
        <div className='instruction container'>
            <h1>How to Do The Quiz ?</h1>
            <p>Instructions of Quiz:</p>
            <ul className="browser-default" id="main-list">
                <li>Choose the kind of product you have questions</li>
                <li>Choose the category of service you want</li>
                <li>Choose the agent skills you prefer</li>
            </ul>
            <div>
                <span className="left"><Link to ="/">No take me back</Link></span>
                <span className="right"><Link to ="/quiz">Ok let's begin</Link></span>
            </div>
        </div>

    </Fragment>
);

export default QuizInstructions;