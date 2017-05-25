import React from 'react';
import {Link} from 'react-router';


export default class PersonalPage extends React.Component{
    componentWillMount() {
        this.props.getPublishProblemsList();
    }

    render(){
        const problemsList = this.props.publishProblemsList.map((a, i)=> {
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

        return <div>
            <div>发布历史</div>
            <div>{problemsList}</div>
        </div>
    }
}