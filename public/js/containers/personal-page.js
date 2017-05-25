import {connect} from 'react-redux';
import PersonalPage from '../components/personal-page';

const mapStateToProps = (state) => {
    return {
        // username: state.getCookies.username,
        publishProblemsList:state.personalPage.publishProblemsList
    }
};

const mapDispatchToProps = (dispatch) => {
    const username = document.cookie.split('=').pop();

    return {
        getPublishProblemsList:()=>{
            dispatch({type:"GET_PUBLISH_PROBLEMS",username})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPage);