import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import QuizInstructions from './components/quiz/QuizInstructions';
import Plays from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/begin/instructions" exact component={QuizInstructions} />
      <Route path="/quiz" exact component={Plays} />
      <Route path="/quiz/QuizSummary" exact component={QuizSummary} />
    </Router>
    
  );
}

export default App;