import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import Hello from './containers/hello';
import reducer from './reducers/index';
import WriteProblem from './containers/write-problem';
import Login from './containers/login';
import Register from './containers/register';
import ShowProblem from './containers/show-problem';
import ProblemsList from './containers/problem-list';
import EditProblem from './containers/edit-problem';
import showProblemMiddleware from './middlewares/showProblemMiddleware';
import middleHello from './middlewares/hello';
import middleWriteProblem from './middlewares/write-problem';
import problemsListMiddleware from './middlewares/problemsListMiddleware';
import loginMiddleWare from './middlewares/loginMiddleWare';
import registerMiddleware from './middlewares/registerMiddleware';
import editProblemMiddleware from './middlewares/editProblemMiddleware';
import replyMiddleware from './middlewares/replyMiddleware';

const createMiddlewareStore = applyMiddleware(middleHello, showProblemMiddleware, middleWriteProblem, problemsListMiddleware, loginMiddleWare, registerMiddleware, editProblemMiddleware, replyMiddleware)(createStore);
const store = createMiddlewareStore(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
        <Route path="/showProblem/:id" component={ShowProblem}/>
        <Route path="/writeProblem" component={WriteProblem}/>
        <Route path="/login" component={Login}/>
        <Route path="/problemsList" component={ProblemsList}/>
        <Route path="/registerPage" component={Register}/>
        <Route path="/editProblem/:id" component={EditProblem}/>
    </Router>
</Provider>, document.getElementById("content"));
