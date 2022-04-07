//it is for redux setup

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

//1st argument - instance of App, 2nd argument - DOM node which is 
//specified in public/index.html
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);