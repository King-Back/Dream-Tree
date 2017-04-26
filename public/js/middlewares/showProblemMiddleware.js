import request from 'superagent';

const showProblemMiddleware = store=>next=>action=>{
    switch(action.type){
        case 'LOAD_PROBLEM_INFO' :
            request.get(`/getProblem/${action.url}`)
                .end((err,res)=>{
                    if(res.ok&&!err){
                        next({
                            type:'SHOW_PROBLEM_INFO',
                            data:res.body
                        });
                    }
                });
            break;
    }
    next(action);
};

export default showProblemMiddleware;

