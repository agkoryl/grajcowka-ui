import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Register from './Register';
import { registerUser } from '../../store/actions/auth';

const mapDispatchToProps = dispatch => ({
    registerUser: (user) => dispatch(registerUser(user))
});

export default withRouter(connect(null, mapDispatchToProps)(Register));