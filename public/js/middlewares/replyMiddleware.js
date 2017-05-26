import request from 'superagent';

export default store => next => action => {

    if(action.type === "ADD_COMMENT") {
        request.post("/replyComment")
            .send(action.text)
            .end((err, res)=> {
                next({type: "GET_COMMENTS_BACK", comments: res.body.comments});
            });
    } else {

        next(action);
    }
};

