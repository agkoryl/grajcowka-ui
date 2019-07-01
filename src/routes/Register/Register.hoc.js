import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Register from './Register';
import { registerUser } from '../../store/actions/auth';

const mapDispatchToProps = dispatch => ({
    registerUser: (user) => dispatch(registerUser(user))
});

const mapStateToProps = state => ({
    registerLoading: state.user.isLoading,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));