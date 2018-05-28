import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './components/store/configureStore';
import { Router, browserHistory } from 'react-router';
import App from './components/App';
import './styles/styles.css';  // webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
     document.getElementById('app')
  );
