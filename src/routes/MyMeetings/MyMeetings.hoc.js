import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MyMeetings from './MyMeetings';


const mapDispatchToProps = dispatch => ({

})


const mapStateToProps = state => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyMeetings));