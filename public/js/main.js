require('../css/style.css');

import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import Hello from './containers/hello';
import reducer from './reducers/hello';

const store = createStore(reducer);


render(<Provider store={store}>
        <Hello/>
    </Provider>, document.getElementById("content"));
