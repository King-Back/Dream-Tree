export default (state = {problems: []}, action) => {
    if (action.type === 'SHOW_PROBLEMS_LIST') {
        state.problems = action.data;
        return Object.assign({}, state);
    }
    return state;
}