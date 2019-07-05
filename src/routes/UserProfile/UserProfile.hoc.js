import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import UserProfile from './UserProfile';


const mapDispatchToProps = dispatch => ({

})


const mapStateToProps = state => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));