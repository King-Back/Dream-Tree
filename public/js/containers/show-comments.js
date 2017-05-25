import {connect} from 'react-redux';
import ShowComments from '../components/show-comments';

const mapStateToProps = (state) => {
    return {
        id: state.showProblem.problem._id,
        comments: state.getComments.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (id) => {
            dispatch({type: "GET_COMMENTS", id});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowComments);