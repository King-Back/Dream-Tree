import {connect} from 'react-redux';
import ProblemsList from '../components/problem-list';

const mapStateToProps = (state) => {
    return {
        problems:state.problemsList.problems
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