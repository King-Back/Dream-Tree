import request from 'superagent';

const editProblemMiddleware = store=>next=>action=>{
    switch(action.type){
        case 'OVER_LOAD_PROBLEM_INFO' :
            request.get(`/getProblem/${action.url}`)
                .end((err,res)=>{
                    if(res.ok&&!err){
                        next({
                            type:'OVER_SHOW_PROBLEM_INFO',
                            data:res.body
                        });
                    }
                });
            break;
        case 'LOAD_UPDATE_PROBLEM_INFO' :
            request.post(`/updateProblem`)
                .send(action.data)
                .end((err,res)=>{
                    if(res.ok&&!err){
                        next({
                            type:'UPDATE_PROBLEM_INFO',
                            data:res.body
                        });
                    }
                });
            break;
    }
    next(action);
};

export default editProblemMiddleware;

