import { connect } from 'react-redux';

import AppNavBar from './AppNavBar';
import { logout } from '../../store/actions/auth';


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(AppNavBar);