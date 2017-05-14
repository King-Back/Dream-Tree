import {connect} from 'react-redux';
import WriteProblem from '../components/write-problem';

const mapStateToProps = (state) => {
    return {
        saveSuccess: state.writeProblem.saveSuccess,
        username: state.getCookies.username
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPublic: (problemInfo) => {
            dispatch({type: 'PUBLIC_PROBLEM', data: problemInfo});
        },
        getUsername: () => {
            dispatch({type: "GET_COOKIES"});
        },
        onChangePublicSuccess: () => {
            dispatch({type: "CHANGE_PUBLIC_SUCCESS"});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteProblem);