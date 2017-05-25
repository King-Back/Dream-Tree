import React from 'react';

export default class ShowComments extends React.Component {

    render() {
        if (this.props.id && !this.props.comments.length) {
            this.props.getComments(this.props.id);
        }

        const comments = this.props.comments.map((c, i) => {
            return <div key={i}>
                <div>
                    {c.author}
                </div>
                <div>
                    {c.content}
                </div>
            </div>
        });
        return <div>
            {comments}
        </div>
    }
}