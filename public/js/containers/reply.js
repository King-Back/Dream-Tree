import {connect} from "react-redux";
import Reply from '../components/reply';

const mapStateToProps = (state) => {
    return {
        id: state.showProblem.problem._id,
        isSaved: state.reply.isSaved
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (text) => {
            dispatch({type: "ADD_COMMENT", text});
        },
        changeIsSaved: () => {
            dispatch({type: "CHANGE_IS_SAVED"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reply);