export default (state = {comments: []}, action)=> {
    if(action.type === 'GET_COMMENTS_BACK') {
        state.comments = action.comments;
        return Object.assign({}, state);
    }

    return state;
}