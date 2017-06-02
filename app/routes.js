/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={IndexPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </App>
);
