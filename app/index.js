import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { createHashHistory } from 'history';
// import { configureStore, history } from './store/configureStore';
import './app.global.css';
import 'bluerain-bootstrap-theme/dist/css/bluerain-bootstrap-theme.css';
import 'bluerain-client-services/dist/style.css';

const history = createHashHistory();
import store from './redux/store';

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
