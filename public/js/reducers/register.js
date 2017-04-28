export default (state = {tip: ""}, action)=> {
    switch (action.type) {
        case "JUDGE_REGISTER":
            state.tip = action.tip;
            return Object.assign({},state);
    }
    return state;
}