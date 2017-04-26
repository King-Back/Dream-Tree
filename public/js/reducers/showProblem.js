export default (state = {problem: {}}, action) => {
    if (action.type === 'LOAD_PROBLEM_INFO') {
        console.log("red");
        state.problem = action.data;
        return Object.assign({}, state);
    }
    return state;
}