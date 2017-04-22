export default (state = {problem: {}}, action) => {
    if (action.type === 'SHOW_PROBLEM_INFO') {
        state.problem = action.data[0];
        console.log("reducer... "+state.problem.title);
        return Object.assign({}, state);
    }
    return state;
}