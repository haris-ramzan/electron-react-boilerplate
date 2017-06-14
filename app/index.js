import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory, Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';

import 'bluerain-bootstrap-theme/dist/css/bluerain-bootstrap-theme.css';
import 'bluerain-client-services/dist/style.css';
import { client, wsClient } from './client';
import rootRoute from './routes/index';


import store from './redux/store';

render(
  <AppContainer>
    <ApolloProvider store={store} client={client}>
      <Router
        history={browserHistory}
        routes={rootRoute}
      />
    </ApolloProvider>
  </AppContainer>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept();
}
