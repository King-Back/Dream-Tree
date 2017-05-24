import request from 'superagent';

const personalPublicHistoryMiddleware = store=>next=>action=> {
    switch (action.type) {
        case 'GET_PUBLISH_PROBLEMS' :
            request.get(`/getPublishProblems/${action.username}`)
                .end((err, res)=> {
                    if (res.ok && !err) {
                        next({
                            type: 'SHOW_PUBLISH_PROBLEMS',
                            data: res.body
                        });
                    }
                });
            break;
    }
    next(action);
};

export default personalPublicHistoryMiddleware;
