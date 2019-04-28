import { connect } from 'react-redux';

import AppNavBar from './AppNavBar';
import { logout } from '../../store/actions/auth';


const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavBar);