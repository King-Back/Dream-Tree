import {connect} from 'react-redux';
import EditProblem from '../components/edit-problem';

const mapStateToProps = (state) => {
    return {
        id: state.editProblem.problem._id,
        title: state.editProblem.problem.title,
        description: state.editProblem.problem.description,
        author: state.editProblem.problem.author
    }
};

const mapDispatchToProps = (dispatch) => {
    const id = decodeURI(location.href).split("/").pop();
    return {
        overDisplayProblem: () => {
            dispatch({type: "OVER_LOAD_PROBLEM_INFO", url: `${id}`});
        },
        onUpdateProblem: (problem)=> {
            dispatch({type: "LOAD_UPDATE_PROBLEM_INFO", data: problem})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProblem);