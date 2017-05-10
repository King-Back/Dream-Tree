export default (state = {logSuccess: ""}, action) => {
    if(action.type === 'LOGIN_SUCCESS') {
        state.logSuccess = action.isSuccess;
        return Object.assign({}, state);
    } else if(action.type === "CHANGE_LOG_SUCCESS"){
        state.logSuccess = "";
        return Object.assign({}, state);
    }
    return state;
}