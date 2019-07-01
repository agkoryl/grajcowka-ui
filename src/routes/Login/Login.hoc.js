import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Login from './Login';
import { loginUser } from '../../store/actions/auth';

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user))
});

const mapStateToProps = state => ({
  newlyRegistered: state.user.newlyRegistered,
  loginLoading: state.user.isLoading
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));