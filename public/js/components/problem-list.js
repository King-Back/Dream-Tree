import React from 'react';

export default class ProblemList extends React.Component {
    componentWillMount() {
        this.props.onDisplayProblemsList();
    }

    render() {
        const p = this.props.problems.map((a, i)=> {
            return <div key={i}>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-2 control-label">标题</label>
                        <label className="col-md-2 control-label">{a.title}</label>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">详细描述</label>
                        <label className="col-md-2 control-label">{a.description}</label>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">发布人</label>
                        <label className="col-md-2 control-label">{a.auther}</label>
                    </div>
                </form>
            </div>
        });

        return <div className="col-md-8 col-md-offset-2">
            <div className="titlePage">
                <center><h1>问题列表</h1></center>
            </div>
            {p}
        </div>
            ;
    }
}