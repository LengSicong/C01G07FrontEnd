import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () =>(
    <Fragment>
        <Helmet><title>Routing App - Home</title></Helmet>
        <div id="home">
            <section>
                <h2>Routing</h2>
                <h1>App</h1>
                <div className="begin-button-container">
                    <ul>
                        <li><Link className="begin-button" to="/begin/instructions">Begin</Link></li>
                    </ul>
                </div>
            </section>

        </div>
    </Fragment>
        
);

export default Home;