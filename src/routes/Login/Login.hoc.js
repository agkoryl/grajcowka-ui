import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Login from './Login';
import { loginUser } from '../../store/actions/auth';

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));