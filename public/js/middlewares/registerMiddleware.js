// import request from 'superagent';
//
// const registerMiddleware = store => state => action => {
//     switch (action.type) {
//         case 'SUBMIT_REGISTER_INFO':
//             request.post('/register')
//                 .send(action.user)
//                 .end((err, res) => {
//                     if (res.ok && !err) {
//                         next({
//                             type: 'JUDGE_REGISTER',
//                             tip: res.body
//                         })
//                     }
//                 });
//             break;
//     }
//     next(action);
// };
//
// export default registerMiddleware;

import request from 'superagent';

const registerMiddleware = store=>next=>action=> {
    switch (action.type) {
        case 'SUBMIT_REGISTER_INFO' :
            request.post(`/register`)
                .send(action.user)
                .end((err, res)=> {
                    if (res.ok && !err) {
                        next({
                            type: 'JUDGE_REGISTER',
                            tip: res.body
                        })
                    }
                });
            break;
    }
    next(action);
};

export default registerMiddleware;