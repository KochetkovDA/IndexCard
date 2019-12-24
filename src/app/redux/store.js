
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
  const rootReducer = combineReducers({ reducer(state = 0) { return (state); } });

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
    ),
  );
}
