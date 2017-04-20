require('../../css/style.css');

import React from 'react';

export default class ShowProblem extends React.Component {
    render() {
        return <div className="col-md-8 col-md-offset-2">
            <div className="titlePage">
                <center><h1>问题详情</h1></center>
            </div>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-md-2 control-label">标题</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="title"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">详细描述</label>
                    <div className="col-md-8">
                        <textarea rows="10" className="form-control" id="content"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">发布人</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="author"/>
                    </div>
                </div>
            </form>
            <div>
                <button className="btn btn-primary col-md-2 col-md-offset-5 submitButton">发布</button>
            </div>
        </div>;
    }
}