import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import store from './store/index';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);