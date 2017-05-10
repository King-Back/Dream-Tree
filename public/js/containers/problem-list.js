import {connect} from 'react-redux';
import ProblemsList from '../components/problem-list';

const mapStateToProps = (state) => {
    return {
        problems:state.problemsList.problems,
        username: state.getCookies.username
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDisplayProblemsList: () => {
            dispatch({type: "LOAD_PROBLEMS_LIST"});
        },
        getUsername: () => {
            dispatch({type: "GET_COOKIES"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProblemsList);