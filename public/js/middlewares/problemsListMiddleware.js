import request from 'superagent';

const problemsListMiddleware = store=>next=>action=>{
    switch(action.type){
        case 'LOAD_PROBLEMS_LIST' :
            request.get(`/getAllProblems`)
                .end((err,res)=>{
                    if(res.ok&&!err){
                        next({
                            type:'SHOW_PROBLEMS_LIST',
                            data:res.body.info
                        });
                    }
                });
            break;
    }
    next(action);
};

export default problemsListMiddleware;