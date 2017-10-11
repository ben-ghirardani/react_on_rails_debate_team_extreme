import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import PickTeam from './component/pick_team';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
    <HashRouter> 
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/pick_team' component={PickTeam} />
    </Switch>
  </HashRouter>  
    , document.getElementById('root'));

registerServiceWorker();