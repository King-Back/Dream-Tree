require('../css/style.css');

import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import Hello from './containers/hello';
import reducer from './reducers/hello';

const store = createStore(reducer);


render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
    </Router>
</Provider>, document.getElementById("content"));
