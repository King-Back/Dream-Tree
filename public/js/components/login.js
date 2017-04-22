import React from 'react';

export default class Login extends React.Component {
    render() {
        return <div className="col-md-8 col-md-offset-2">
            <div >
                <div >
                    <div>
                        <h2>登录</h2>
                    </div>

                    <div>
                        账号：<input type="text" id="account"/>
                    </div>

                    <div>
                        密码：<input type="password" id="password  "/>
                    </div>

                    <button>登录</button>
                </div>
            </div>
        </div>
    }
}