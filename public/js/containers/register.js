import {connect} from 'react-redux';
import register from '../components/register';

const mapStateToProps = (state) => {
    return {
        register: state.register.tip
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        onDisplayRegister: (user) => {
            dispatch({
                type: "SUBMIT_REGISTER_INFO",
                user
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(register);