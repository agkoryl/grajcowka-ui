import { connect } from 'react-redux';

import Login from './Login';
import { loginUser } from '../../store/actions/auth';


const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
  });

export default connect(null, mapDispatchToProps)(Login);