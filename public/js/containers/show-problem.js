import {connect} from 'react-redux';
import ShowProblem from '../components/show-problem';

const mapStateToProps = (state) => {
    return {
        id: state.showProblem.problem._id,
        title: state.showProblem.problem.title,
        description: state.showProblem.problem.description,
        author: state.showProblem.problem.author
    }
};

const mapDispatchToProps = (dispatch) => {
    const id = decodeURI(location.href).split("/").pop();
    return {
        onDisplayProblem: () => {
            dispatch({type: "LOAD_PROBLEM_INFO", url: `${id}`});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowProblem);