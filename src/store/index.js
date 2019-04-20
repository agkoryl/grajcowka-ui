import { createStore, combineReducers } from 'redux';

import user from './reducers/auth';
import games from './reducers/games';
import meetings from './reducers/meetings';

let store = createStore(combineReducers({
    user: user,
    games: games,
    meetings: meetings
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;