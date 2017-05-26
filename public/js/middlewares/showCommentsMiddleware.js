import request from 'superagent';

export default store => next => action => {

    if(action.type === "GET_COMMENTS") {
        console.log(action.id);
        request.post("/allComments")
            .send({id: action.id})
            .end((err, res)=> {
                if (err) {
                    console.log(err);
                    alert("获取评论失败!");
                } else {
                    next({type: "GET_COMMENTS_BACK", comments: res.body.comments});
                }
            });
    } else {

        next(action);
    }
};

