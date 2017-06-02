/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import ResetPage from './pages/ResetPage';
import ForGotPage from './pages/ForGotPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/404';

export default () => (
  <App>
    <Switch>
      {/* <Route path="/" component={IndexPage} /> */}
      <Route path="/" component={LoginPage} />
      <Route path="/app" component={IndexPage} />
      <Route path="/logout" component={LogoutPage} />
      <Route path="/terms" component={TermsAndConditionsPage} />
      <Route path="/reset" component={ResetPage} />
      <Route path="/forgot" component={ForGotPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  </App>
);
