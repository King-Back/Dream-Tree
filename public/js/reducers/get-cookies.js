export default (state = {username: ""}, action) => {
    if(action.type === 'USERNAME') {
        console.log(action.username);
        state.username = action.username;
        return Object.assign({}, state);
    }
    return state;
}