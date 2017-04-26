import {connect} from 'react-redux';
import Login from '../components/login';

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (userInfo) => {
            dispatch({type: "LOGIN", data: userInfo})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);