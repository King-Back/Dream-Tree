import {combineReducers} from 'redux';
import hello from "./hello";
import showProblem from "./showProblem";
import writeProblem from './write-problem';
import problemsList from './problemsList';
import login from './login';
import register from './register';
import getCookies from './get-cookies';
import editProblem from './editProblem';
import personalPage from './personalPage';
import getComments from './getComments';

export default combineReducers({
    hello,
    showProblem,
    writeProblem,
    problemsList,
    login,
    register,
    getCookies,
    getComments,
    editProblem,
    personalPage
});
