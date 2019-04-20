import { connect } from 'react-redux';

import MainMeetings from './MainMeetings';


const mapStateToProps = state => ({
    token: state.user.user.token
  });

export default connect(mapStateToProps)(MainMeetings);