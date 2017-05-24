import {combineReducers} from 'redux';
import hello from "./hello";
import showProblem from "./showProblem";
import writeProblem from './write-problem';
import problemsList from './problemsList';
import login from './login';
import register from './register';
import getCookies from './get-cookies';
import editProblem from './editProblem';
import reply from './reply';

export default combineReducers({
    hello,
    showProblem,
    writeProblem,
    problemsList,
    login,
    register,
    getCookies,
    reply,
    editProblem,
});
