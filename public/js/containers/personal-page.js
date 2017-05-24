import {connect} from 'react-redux';
import personalPage from '../components/personal-page';

const mapStateToProps = (state) => {
    return {
        // username: state.getCookies.username,
        publishProblemsList:state.personalPage.publishProblemsList
    }
};

const mapDispatchToProps = (dispatch) => {
    const username = (location.href).split("/").pop();
    console.log(username);
    return {
        getPublishProblems:()=>{
            dispatch({type:"GET_PUBLISH_PROBLEMS",username})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(personalPage);