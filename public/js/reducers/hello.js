export default (state = {type: ""}, action) => {
    if(action.type === 'GET_HELLO') {
        state.type = "hello";
        return Object.assign({}, state);
    }
    return state;
}