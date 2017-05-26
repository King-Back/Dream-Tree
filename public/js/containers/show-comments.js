import {connect} from 'react-redux';
import ShowComments from '../components/show-comments';

const mapStateToProps = (state) => {
    return {
        id: state.showProblem.problemId,
        comments: state.getComments.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (id) => {
            dispatch({type: "GET_COMMENTS", id});
        },
        changeProblemId: () => {
            dispatch({type: "CHANGE_PROBLEM_ID"});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowComments);