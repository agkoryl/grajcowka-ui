import {
  createStore, combineReducers,
  applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/auth';
import games from './reducers/games';
import meetings from './reducers/meetings';
import filters from './reducers/filters';

const rootReducer = combineReducers({
  user: user,
  games: games,
  meetings: meetings,
  filters: filters
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [thunk];

let store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);


export default store;