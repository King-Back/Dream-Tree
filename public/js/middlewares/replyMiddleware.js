import request from 'superagent';

export default store => next => action => {

    if(action.type === "ADD_COMMENT") {
        request.post("/replyComment")
            .send(action.text)
            .end((err, res)=> {
                console.log(res.body.isSaved);
                if (err) {
                    next({type: "ADD_COMMENT_BACK", isSaved: false});
                } else {
                    next({type: "ADD_COMMENT_BACK", isSaved: res.body.isSaved});
                }
            });
    } else {

        next(action);
    }
};

