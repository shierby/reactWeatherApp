import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, Router, IndexRoute,browserHistory} from 'react-router';

import './index.css';

import Weather from './Component/Weather'
import About from './Component/About'
import Examples from './Component/Examples'
import routes from './routes'

ReactDOM.render(
  <Router history={browserHistory}>
    {/*<Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/examples" component={Examples} />
      <IndexRoute component={Weather}/>
    </Route>*/}
    {routes}
  </Router>,
  document.getElementById('root')
);
