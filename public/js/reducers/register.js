export default (state = {tip: "", flag: ""}, action)=> {
    switch (action.type) {
        case "JUDGE_REGISTER":
            state.tip = action.tip;
            state.flag = true;
            return Object.assign({},state);
    }
    return state;
}