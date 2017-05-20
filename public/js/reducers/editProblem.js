export default (state = {problem: {}, flag: ""}, action) => {
    if (action.type === 'OVER_SHOW_PROBLEM_INFO') {
        state.problem = action.data;
        return Object.assign({}, state);
    } else if (action.type = 'UPDATE_PROBLEM_INFO') {
        state.flag = action.data;
        return Object.assign({}, state);
    }
    return state;
}
