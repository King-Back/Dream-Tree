import {connect} from 'react-redux';
import Login from '../components/login';

const mapStateToProps = (state) => {
    return {
        logSuccess: state.login.logSuccess
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (userInfo) => {
            dispatch({type: "LOGIN", data: userInfo})
        },
        onChangeLogSuccess: () => {
            dispatch({type: "CHANGE_LOG_SUCCESS"});
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);