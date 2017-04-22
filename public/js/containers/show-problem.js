import {connect} from 'react-redux';
import ShowProblem from '../components/show-problem';

const mapStateToProps = (state) => {
    return {
        title: state.showProblem.problem.title,
        content: state.showProblem.problem.content,
        writer: state.showProblem.problem.writer
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