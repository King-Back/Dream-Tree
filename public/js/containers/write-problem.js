import {connect} from 'react-redux';
import WriteProblem from '../components/write-problem';

const mapStateToProps = (state) => {
    return {
        saveSuccess: state.writeProblem.saveSuccess
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPublic: (problemInfo) => {
            dispatch({type: 'PUBLIC_PROBLEM', data: problemInfo});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteProblem);