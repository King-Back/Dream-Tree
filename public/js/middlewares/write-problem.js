import request from 'superagent';

export default store => next => action => {
    if (action.type === 'PUBLIC_PROBLEM') {
        request.post('/problemInfo')
            .send(action.data)
            .end((err, res) => {
                if(err) {
                    next({type:"PUBLIC_SUCCESS", isSuccess: false});
                }
                next({type:"PUBLIC_SUCCESS", isSuccess: res.body.isSuccess});
            });
    }
    else
        next(action);
};