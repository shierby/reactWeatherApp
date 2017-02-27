import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import $ from 'jquery';

//load foundation
import 'foundation-sites/dist/css/foundation.min.css'
import 'foundation-sites/dist/js/foundation.min'
$(document).foundation();

import './index.css';

import routes from './routes'

ReactDOM.render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  document.getElementById('root')
);
