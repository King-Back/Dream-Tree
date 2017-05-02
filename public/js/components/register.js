import React from "react";

export default class Register extends React.Component {
    getInput() {
        const username = this.refs.username.value.trim();
        const password = this.refs.password.value.trim();
        const confirmPassword = this.refs.confirm.value.trim();

        this.props.onDisplayRegister({username, password, confirmPassword});
    }

    render() {
        if (this.props.flag) {
            if (this.props.register == 'register success') {
                alert(this.props.register);
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
                <lable><input type="text" ref="password"/></lable>
                <lable>确认密码</lable>
                <lable><input type="text" ref="confirm"/></lable>
                <button onClick={this.getInput.bind(this)}>注册</button>
            </from>
        </div>
    }
}
