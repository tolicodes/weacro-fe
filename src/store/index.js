import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { loadState, saveState } from './localStorage';

import pose from './reducers/pose';
import user from './reducers/user';
import view from './reducers/view';
import saga from './saga';
import history from './history';

const reducer = combineReducers({ view, pose, user });
const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();
const store = createStore(
  connectRouter(history)(reducer),
  persistedState,
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    ),
  ),
);
store.subscribe(() => {
  saveState(store.getState());
});
sagaMiddleware.run(saga);

export default store;
