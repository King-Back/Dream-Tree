import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import Hello from './containers/hello';
import reducer from './reducers/index';
import WriteProblem from './containers/write-problem';
import middleHello from './middlewares/hello';

const createMiddlewareStore = applyMiddleware(middleHello)(createStore);
const store = createMiddlewareStore(reducer);


render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
        <Route path="/writeProblem" component={WriteProblem}/>
    </Router>
</Provider>, document.getElementById("content"));
