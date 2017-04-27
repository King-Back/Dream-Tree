import request from 'superagent';

const registerMiddleware = store=>next=>action=> {
    switch (action.type) {
        case 'SUBMIT_REGISTER_INFO' :
            request.post(`/register`)
                .send(action.user)
                .end((err, res)=> {
                        next({
                            type: 'JUDGE_REGISTER',
                            tip: res.body.tip
                        })
                });
            break;
    }
    next(action);
};

export default registerMiddleware;