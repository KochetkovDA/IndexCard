
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxDevTools from 'redux-devtools';

export default function configureStore(initialState) {
  const rootReducer = combineReducers();

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      reduxDevTools,
      thunkMiddleware,
    ),
  );
}
