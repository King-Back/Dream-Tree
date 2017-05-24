export default (state = {publishProblemsList:[]}, action) => {
    if (action.type === 'SHOW_PUBLISH_PROBLEMS') {
        state.publishProblemsList = action.data;
        return Object.assign({}, state);
    }
    return state;
}