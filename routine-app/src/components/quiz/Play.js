import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

class Play extends Component {
    // constructor (props){
    //     super(props);
    // }

    render(){
        return(
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                <div className="questions">
                    <h5>What kind of product do you have question?</h5>
                    <div className="options-container">
                        <p className="option">Ipad</p>
                        <p className="option">Iphone</p>
                    </div>
                    <div className="options-container">
                        <p className="option">Ipod</p>
                        <p className="option">Imac</p>
                    </div>

                    <dic className="button-container">
                        <button>Previous</button>
                        <button>Next</button>
                        <button>Quit</button>
                    </dic>
                </div>
            </Fragment>
        )
    }
}

export default Play;