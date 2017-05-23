import request from 'superagent';

export default store => next => action => {

    switch (action.type) {
        case 'ADD_COMMENT' :
            request.post("/replyComment")
                .send(action.text)
                .end((err, res)=> {
                    console.log(res.body);
                });
            break;
    }
    next(action);
};

