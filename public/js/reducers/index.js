import {combineReducers} from 'redux';
import hello from "./hello";
import showProblem from "./showProblem";
import writeProblem from './write-problem';

export default combineReducers({
    hello,
    showProblem,
    writeProblem
});
