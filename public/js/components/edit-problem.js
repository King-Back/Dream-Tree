require('../../css/style.css');

import React from 'react';

export default class EditProblem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            author: '',
            flag: true
        }
    }

    componentWillMount() {
        this.props.overDisplayProblem();
    }

    onchangeTitle() {
        this.setState({
            title: this.refs.title.value
        });
    }

    onchangeDescription(){
        this.setState({
            description: this.refs.description.value
        });
    }

    onchangeAuthor(){
        this.setState({
            author: this.refs.author.value
        });
    }

    updateProblem() {
        const title = this.refs.title.value;
        const content = this.refs.description.value;
        const author = this.props.username;
        const id = this.props.id;

        if (!title || !content || !author) {
            alert("发布问题时所有项不能为空!");
            return;
        }

        this.props.onUpdateProblem({id, title, content, author});
    }

    render() {
        const title = this.state.title;
        const description = this.state.description;
        const author = this.state.author;

        return <div className="col-md-8 col-md-offset-2">
            <div className="titlePage">
                <center><h1>修改问题</h1></center>
            </div>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-md-2 control-label">标题</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" ref="title"
                               value={!title ? this.props.title : title}
                               onChange={this.onchangeTitle.bind(this)}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">详细描述</label>
                    <div className="col-md-8">
                        <textarea rows="10" className="form-control" ref="description"
                                  value={!description ? this.props.description : description}
                        onChange={this.onchangeDescription.bind(this)}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">发布人</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" ref="author"
                               value={!author ? this.props.author : author} onChange={this.onchangeAuthor.bind(this)}/>
                    </div>
                </div>
            </form>
            <div>
                <button className="btn btn-primary col-md-2 col-md-offset-5 submitButton"
                        onclick={this.updateProblem.bind(this)}>更新
                </button>
            </div>
        </div>;
    }
}