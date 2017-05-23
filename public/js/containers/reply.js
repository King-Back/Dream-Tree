import {connect} from "react-redux";
import Reply from '../components/reply';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (text) => {
            console.log(text);
            dispatch({type: "ADD_COMMENT", text});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reply);