export default (state = {problem: {}}, action) => {
    if (action.type === 'OVER_SHOW_PROBLEM_INFO') {
        state.problem = action.data;
        return Object.assign({}, state);
    }
    return state;
}
