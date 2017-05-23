import request from 'superagent';

const showProblemMiddleware = store => next => action => {
    console.log(action.text);

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

export default showProblemMiddleware;

