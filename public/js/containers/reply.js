import {connect} from "react-redux";
import Reply from '../components/reply';

const mapStateToProps = (state) => {
    return {
        id: state.showProblem.problem._id,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (text) => {
            dispatch({type: "ADD_COMMENT", text});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reply);