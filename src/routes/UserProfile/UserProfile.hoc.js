import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import UserProfile from './UserProfile';


// const mapDispatchToProps = dispatch => ({

// })


const mapStateToProps = state => ({
    user: state.user.user,
    userMeetings: state.userMeetings,
});

export default withRouter(connect(mapStateToProps, null)(UserProfile));