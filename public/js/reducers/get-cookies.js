export default (state = {username: ""}, action) => {
    if(action.type === 'USERNAME') {
        state.username = action.username;
        return Object.assign({}, state);
    }
    return state;
}