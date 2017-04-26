import {combineReducers} from 'redux';
import hello from "./hello";
import showProblem from "./showProblem";
import writeProblem from './write-problem';
import problemsList from './problemsList';
import login from './login';

export default combineReducers({
    hello,
    showProblem,
    writeProblem,
    problemsList,
    login
});
