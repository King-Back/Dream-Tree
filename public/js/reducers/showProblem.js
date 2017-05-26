export default (state = {problem: {}, problemId: ""}, action) => {
    if (action.type === 'SHOW_PROBLEM_INFO') {
        state.problem = action.data;
        state.problemId = action.data._id;
        return Object.assign({}, state);
    } else if("CHANGE_PROBLEM_ID") {
        state.problemId = "";
        return Object.assign({}, state);
    }
    return state;
}