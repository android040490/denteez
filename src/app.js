import './main.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory} from 'react-router';

import reducers from 'redux-store/reducers';

import Layout from './components/Layout';
import ContactUsPage from './components/ContactUsPage';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

let prevLocation = {};
browserHistory.listenBefore(location => {
  const pathChanged = prevLocation.pathname !== location.pathname;
  const hashChanged = prevLocation.hash !== location.hash;
  if (pathChanged || hashChanged) window.scrollTo(0, 0);
  prevLocation = location;
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Layout} />
            <Route path='/contact/:id' component={ContactUsPage} />
        </Router>
    </Provider>,
    document.getElementById('app'))