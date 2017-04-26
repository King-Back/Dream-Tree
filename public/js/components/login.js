import React from 'react';
import {browserHistory} from 'react-router';

export default class Login extends React.Component {
    login() {
        const userName = this.refs.userName.value;
        const userPassword = this.refs.userPassword.value;
        console.log(userName, userPassword);
        if (!userName || !userPassword) {
            alert("用户名和密码不能为空！");
            return;
        }
        this.props.onLogin({userName, userPassword})
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.logSuccess) {
            alert("登录成功！");
            browserHistory.push('/');
        } else {
            alert("登录失败！");
        }
    }


    render() {
        return <div className="col-md-8 col-md-offset-2">
            <div >
                <div >
                    <div>
                        <h2>登录</h2>
                    </div>

                    <div>
                        账号：<input type="text" id="account" ref="userName"/>
                    </div>

                    <div>
                        密码：<input type="password" id="password" ref="userPassword"/>
                    </div>

                    <button onClick={this.login.bind(this)}>登录</button>
                </div>
            </div>
        </div>
    }
}