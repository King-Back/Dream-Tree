export default (state = {saveSuccess: ""}, action) => {
    if (action.type === 'PUBLIC_SUCCESS') {
        state.saveSuccess = action.isSuccess;

        return Object.assign({}, state);
    } else if (action.type === "CHANGE_PUBLIC_SUCCESS") {
        state.saveSuccess = "";

        return Object.assign({}, state);
    }

    return state;
}