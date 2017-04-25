import {connect} from 'react-redux';
import ShowProblem from '../components/show-problem';

const mapStateToProps = (state) => {
    return {
        title: state.showProblem.problem.title,
        description: state.showProblem.problem.description,
        auther: state.showProblem.problem.auther
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDisplayProblem: () => {
            dispatch({type: "LOAD_PROBLEM_INFO"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowProblem);