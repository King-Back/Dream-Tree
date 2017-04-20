import React from 'react';
export default class Login extends React.Component {
    render() {
        return <div>
            <div >
                <h2>登录</h2>
            </div>
            <div>
                <h3>账号：</h3>
                <input type="text" id="account"/>
            </div>
            <div>
                <h3>密码：</h3>
                <input type="password" id="password  "/>
            </div>
            <button>登录</button>
        </div>;
    }
}