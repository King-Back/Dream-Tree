import {connect} from 'react-redux';
import ProblemsList from '../components/problem-list';

const mapStateToProps = (state) => {
    const user = state.register.userCookie.split('=');
    return {
        problems:state.problemsList.problems,
        userCookie: user[1]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDisplayProblemsList: () => {
            dispatch({type: "LOAD_PROBLEMS_LIST"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProblemsList);