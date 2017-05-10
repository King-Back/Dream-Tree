import React from "react";
import {browserHistory} from 'react-router';

export default class Register extends React.Component {
    getInput() {
        const username = this.refs.username.value.trim();
        const password = this.refs.password.value.trim();
        const confirmPassword = this.refs.confirm.value.trim();

        if (password !== confirmPassword) {
            alert("confirmPassword error");
            return false;
        } else {
            this.props.onDisplayRegister({username, password, confirmPassword});
        }
    }

    render() {
        if (this.props.flag) {
            if (this.props.register == 'register success') {
                alert(this.props.register);
                browserHistory.push('/problemsList');
            } else {
                alert("register fail");
            }
        }

        return <div>
            <h2>注册</h2>
            <from>
                <lable>用户名</lable>
                <lable><input type="text" ref="username"/></lable>
                <lable>密码</lable>
                <lable><input type="password" ref="password"/></lable>
                <lable>确认密码</lable>
                <lable><input type="password" ref="confirm"/></lable>
                <button onClick={this.getInput.bind(this)}>注册</button>
            </from>
        </div>
    }
}
