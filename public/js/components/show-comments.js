import React from 'react';

export default class ShowComments extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.id);
        if(nextProps.id) {
            this.props.getComments(nextProps.id);
            this.props.changeProblemId();
        }
    }

    render() {
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