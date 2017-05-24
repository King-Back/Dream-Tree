export default (state = {isSaved: ""}, action)=> {
    if(action.type === 'ADD_COMMENT_BACK') {
        state.isSaved = action.isSaved;
        return Object.assign({}, state);
    } else if(action.type === "CHANGE_IS_SAVED") {
        state.isSaved = "";
        return Object.assign({}, state);
    }
    return state;
}