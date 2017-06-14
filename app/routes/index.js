import React from 'react';
import SystemLayout from '../layouts/SystemLayout';
import store from '../redux/store';
import { showLoading, hideLoading } from 'bluerain-client-services';

const appRoutes = [];
require('../server/appLoader').forEach((app) => {
  if (app.routes) {
    appRoutes.push(app.routes());
  }
});

// console.log(appRoutes)
function loggedIn() {
  if (localStorage && localStorage.sessionToken)
    return true;
  return false;
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

function handeOnChangeRoute(nextState, replace) {
  store.dispatch(hideLoading());
}

function wrapLoadingBar(WrappedComponent) {
  return (props) => ({
    render() {
      return <WrappedComponent showLoading={() => store.dispatch(showLoading())} hideLoading={() => store.dispatch(hideLoading())} {...props} />;
    }
  });
}

function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

module.exports = {
  component: SystemLayout,
  onChange: handeOnChangeRoute,
  childRoutes: [
    {
      path: '/',
      onEnter: requireAuth,
      indexRoute: {
        getComponent(location, cb) {
          System.import('../pages/IndexPage')
            .then(loadRoute(cb))
            .catch(errorLoading);
        }
      }
    },
    // {
    //   path: '/about',
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/AboutPage')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   }
    // },
    // {
    //   path: '/forgot/:token',
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/VerifyPage')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   }
    // },
    // {
    //   path: '/login',
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/LoginPage')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   }
    // },
    // {
    //   path: '/profile',
    //   onEnter: requireAuth,
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/ProfilePage')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   }
    // },
    // {
    //   path: '/signup',
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/SignupPage')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   }
    // },
    // {
    //   path: '/forgot',
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/ForGotPage')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   }
    // },
    // {
    //   path: '/reset',
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/ResetPage')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   }
    // },
    // {
    //   path: '/logout',
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/LogoutPage')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   }
    // },
    // {
    //   path: '/terms',
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/TermsAndConditionsPage')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   }
    // },
    // {
    //   path: '/app',
    //   onEnter: requireAuth,
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/IndexPage')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   },
    //   childRoutes: appRoutes
    // },
    // {
    //   path: '*',
    //   indexRoute: {
    //     getComponent(location, cb) {
    //       System.import('../pages/404')
    //         .then(loadRoute(cb))
    //         .catch(errorLoading);
    //     }
    //   }
    // },
  ]
};
