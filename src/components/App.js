import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Board from './Board';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h3><Link to="/">Go Home</Link></h3>
          <Route exact path="/" component={Home}/>
          <Route exact path="/board/:boardId" component={Board}/>
        </div>
      </Router>
    );
  }
}

export default App;
