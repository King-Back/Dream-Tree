require('../../css/style.css');

import React from 'react';
import {browserHistory} from 'react-router';

export default class WriteProblem extends React.Component {
    publicProblem() {
        const title = this.refs.title.value;
        const content = this.refs.content.value;
        const author = this.props.username;
        console.log(author);

        if(!title || !content || !author) {
            alert("发布问题时所有项不能为空!");
            return ;
        }

        this.props.onPublic({title, content, author});
    }

    componentWillMount() {
        this.props.getUsername();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.saveSuccess) {
            alert("发布成功！");
            browserHistory.push('/')
        } else if(nextProps.saveSuccess === false){
            alert("发布失败！");
            this.props.onChangePublicSuccess();
        }
    }

    render() {
        return <div className="col-md-8 col-md-offset-2">
            <div className="titlePage">
                <center><h1>发布问题</h1></center>
            </div>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-md-2 control-label">标题</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="title" ref="title"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">详细描述</label>
                    <div className="col-md-8">
                        <textarea rows="10" className="form-control" id="content" ref="content"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">发布人</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="author" ref="author"/>
                    </div>
                </div>
            </form>
            <div>
                <button className="btn btn-primary col-md-2 col-md-offset-5 submitButton"
                        onClick={this.publicProblem.bind(this)}>发布
                </button>
            </div>
        </div>;
    }
}