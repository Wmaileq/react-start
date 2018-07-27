import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import { history } from '../store';


class App extends React.Component {
  render() {
    return (
        <ConnectedRouter history={history}>
          <Switch>
            <Route/>
          </Switch>
        </ConnectedRouter>
    )
  }
}

export default App;