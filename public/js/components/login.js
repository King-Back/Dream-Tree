require('../../css/style.css');


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
        return <div>
            <div className="logColor ">
                <div className="col-md-8 col-md-offset-7 logPage ">
                    <div >
                        <div >
                            <div>
                                <h2 >登录</h2>
                            </div>


                            <div className="input-group account">

                                <label className="input-group-addon ">账号</label>
                                <input type="text" id="account" ref="userName" className="form-control"/>
                            </div>

                            <div className="input-group account">
                                <lable className="input-group-addon">密码</lable>
                                <input type="password" id="password" ref="userPassword" className="form-control"/>
                            </div>

                            <button className='btn btn-primary  logbutton' onClick={this.login.bind(this) }>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}