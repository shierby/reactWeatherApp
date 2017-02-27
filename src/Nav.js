import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e) {
    e.preventDefault();
    alert('Not yet wired up!');
  }

  render() {
   return (
     <div className="top-bar">
       <div className="top-bar-lef">
          <ul className="menu">
            <li className="menu-text">Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link></li>
            <li><Link to="examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }} >Examples</Link></li>
          </ul>
       </div>
       <div className="top-bar-right">
         <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="text" placeholder="Search weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get weather"/>
              </li>
            </ul>
         </form>
       </div>
     </div>
   )
 }
}

export default Nav;
