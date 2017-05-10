export default (state = {username: ""}, action) => {
    console.log(1);
    if(action.type === 'USERNAME') {
        console.log(action.username);
        state.username = action.username;
        return Object.assign({}, state);
    }
    return state;
}