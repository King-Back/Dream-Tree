import React from "react";

export default class Reply extends React.Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.isSaved === true) {
            alert("评论成功！");
        } else if (nextProps.isSaved === false) {
            alert("评论失败！");
        }

        this.props.changeIsSaved();
    }

    reply() {
        const comment = this.refs.comment.value;
        this.props.addComment({comment, id: this.props.id, author: "游客"});
    }

    render() {
        return <div>
            <textarea id="comment" cols="30" rows="10" ref="comment"></textarea>
            <button onClick={this.reply.bind(this)}>回复</button>
        </div>
    }
}