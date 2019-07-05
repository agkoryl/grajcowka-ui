import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MyMeetings from './MyMeetings';


const mapDispatchToProps = dispatch => ({

})


const mapStateToProps = state => ({
    token: state.user.user.token,
    userId: state.user.user.id,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyMeetings));