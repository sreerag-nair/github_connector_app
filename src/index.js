import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoardComponent from './DashBoardComponent'
import RedirectComponent from './RedirectComponent'

ReactDOM.render(

    <Router>
        <Switch>
            <Route exact path="/login" render={(props) => <App {...props} />} />
            <Route path="/d" render={(props) => <DashBoardComponent {...props} />} />
            <Route path = "/redirect" render={(props) => <RedirectComponent {...props}/>} />
        </Switch>

    </Router>

    , document.getElementById('root'));
registerServiceWorker();
