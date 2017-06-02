import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import createHistory from 'history/createBrowserHistory'
import { ApolloProvider } from 'react-apollo';
import 'bluerain-bootstrap-theme/dist/css/bluerain-bootstrap-theme.css';
import 'bluerain-client-services/dist/style.css';
import { client, wsClient } from './client';

// import 'bluerain-client-services/style.css';

const history = createHistory();
import store from './redux/store';

render(
  <AppContainer>
    <ApolloProvider store={store} client={client}>
      <Root store={store} history={history} />
    </ApolloProvider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <ApolloProvider store={store} client={client}>
          <NextRoot store={store} history={history} />
        </ApolloProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
