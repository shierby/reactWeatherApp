import React from 'react';
import {Route, Router, IndexRoute,browserHistory} from 'react-router';

import App from './App';
import Weather from './Component/Weather'
import About from './Component/About'
import Examples from './Component/Examples';


let routes = (<Route path="/" component={App}>
                <Route path="/about" component={About} />
                <Route path="/examples" component={Examples} />
                <IndexRoute component={Weather}/>
              </Route>);

export default routes;