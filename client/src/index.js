import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './components/reducers';
import reduxThunk from 'redux-thunk';
import './components/App.css';
import App from './components/App';

// test back end route 
import axios from 'axios';
window.axios = axios;

// Set up Redux Store 
const store =  createStore(reducers, {}, applyMiddleware(reduxThunk))






// Nest App to Provider (store)
ReactDOM.render(
<Provider store={store}><App /> </Provider>, document.querySelector('#root'));
