import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './components/reducers';

import App from './components/App';

// Set up Redux Store 
const store =  createStore(reducers, {}, applyMiddleware())






// Nest App to Provider (store)
ReactDOM.render(
<Provider store={store}><App /> </Provider>, document.querySelector('#root'));