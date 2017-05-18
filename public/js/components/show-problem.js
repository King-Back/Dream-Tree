require('../../css/style.css');

import React from 'react';

export default class ShowProblem extends React.Component {
    componentWillMount(){
        this.props.onDisplayProblem();
    }
    render() {
        return <div className="col-md-8 col-md-offset-2">
            <div className="titlePage">
                <center><h1>问题详情</h1></center>
                <input type="button" value="编辑"/>
            </div>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-md-2 control-label">标题</label>
                    <label className="col-md-2 control-label">{this.props.title}</label>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">详细描述</label>
                    <label className="col-md-2 control-label">{this.props.description}</label>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">发布人:</label>
                    <label className="col-md-2 control-label">{this.props.author}</label>
                </div>
            </form>
        </div>;
    }
}