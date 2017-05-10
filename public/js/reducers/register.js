export default (state = {tip: "", userCookie:{}, flag:false}, action)=> {
    switch (action.type) {
        case "JUDGE_REGISTER":
            state.tip = action.tip;
            state.userCookie = document.cookie;
            console.log(document.cookie);
            state.flag = true;
            return Object.assign({},state);
    }
    return state;
}