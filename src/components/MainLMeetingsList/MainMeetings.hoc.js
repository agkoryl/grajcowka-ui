import { connect } from 'react-redux';

import MainMeetings from './MainMeetings';
import { populateMeetings } from '../../store/actions/meetings';
import { clearFilters } from '../../store/actions/filters';
import { joinAMeeting } from '../../store/actions/joinmeeting';

const mapDispatchToProps = dispatch => ({
  populateMeetings: (token) => dispatch(populateMeetings(token)),
  clearFilters: () => dispatch(clearFilters()),
  joinAMeeting: (meetingId, userId, token) => dispatch(joinAMeeting(meetingId, userId, token))
})


const mapStateToProps = state => ({
  token: state.user.user.token,
  filters: state.filters,
  meetings: state.meetings,
  user: state.user.user
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMeetings);