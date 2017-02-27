import React, { Component } from 'react';
import { Link } from 'react-router'

class Examples extends Component {
  render() {
    return (
      <div className="example">
        <h1 className="text-center">Examples</h1>
        <p>Welcome to example page!</p>
        <ol>
          <li>
            <Link to="/?location=Kiev">Kiev, UA</Link>
          </li>
          <li>
            <Link to="/?location=London">lindon, UK</Link>
          </li>
        </ol>
      </div>
    )
  }
}

export default Examples;