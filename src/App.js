import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
