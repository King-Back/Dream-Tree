import {combineReducers} from 'redux';
import hello from "./hello";
import showProblem from "./showProblem";
import writeProblem from './write-problem';
import problemsList from './problemsList';
import login from './login';
import register from './register';

export default combineReducers({
    hello,
    showProblem,
    writeProblem,
    problemsList,
    login,
    register
});
