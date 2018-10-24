import React, { Component } from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import './App.css';
import routes from './Routes';

class App extends Component {
  render() {    
    return (
      <div>
        <ul>
          {
            routes.map(r => <li key={r.path}><NavLink 
              to={r.path}
              activeClassName="active">{
              <FormattedMessage
                id={ r.title }
              />
            }</NavLink></li>)
          }
        </ul>
        
        <Switch>
          {
            routes.map(r => <Route exact={r.exact} key={r.path} path={r.path} component={r.component} />)
          }
        </Switch>
      </div>
    );
  }
}

export default App;