import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore,  applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './App';

import createSagaMiddleware from 'redux-saga'
import GetProduct from './ducks/lists';
import allReducers from './common/indexReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(GetProduct)


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
