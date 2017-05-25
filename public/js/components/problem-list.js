import React from 'react';
import {Link} from 'react-router';

export default class ProblemList extends React.Component {
    componentWillMount() {
        this.props.getUsername();
        this.props.onDisplayProblemsList();
    }

    render() {
        const username = this.props.username;

        const p = this.props.problems.map((a, i)=> {
            return <div key={i}>
                <form className="form-horizontal">
                    <Link to={`/showProblem/${a._id}`}>
                        <div className="form-group">
                            <label className="col-md-2 control-label">标题</label>
                            <label className="col-md-2 control-label">{a.title}</label>
                        </div>
                    </Link>
                    <div className="form-group">
                        <label className="col-md-2 control-label">详细描述</label>
                        <label className="col-md-2 control-label">{a.description}</label>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">发布人</label>
                        <label className="col-md-2 control-label">{a.author}</label>
                    </div>
                </form>
            </div>
        });

        return (<div className="col-md-8 col-md-offset-2">
            <Link to={`/personalPage`}>
                <div>个人中心</div>
            </Link>

            <div className="titlePage">
                <center><h1>问题列表</h1></center>
            </div>
           <div>{username}</div>
            {p}
        </div>);
    }
}