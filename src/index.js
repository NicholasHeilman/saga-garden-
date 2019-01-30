import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './App';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {

}

const boxList = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOXES':
      return action.payload;
    default:
      return state;
  }
};

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLANTS':
      return action.payload;
    default:
      return state;
  }
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ 
    plantList,
    boxList 
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
