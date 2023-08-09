import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import usersReducer from './reducers/usersReducer.js';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  users: usersReducer,
  // rickMorty: rmReducer,
})

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store
