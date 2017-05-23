import React from "react";

export default class Reply extends React.Component {
    reply() {
        const comment = this.refs.comment.value;
        this.props.addComment(comment);
    }

    render() {
        return <div>
            <textarea id="comment" cols="30" rows="10" ref="comment"></textarea>
            <button onClick={this.reply.bind(this)}>回复</button>
        </div>
    }
}