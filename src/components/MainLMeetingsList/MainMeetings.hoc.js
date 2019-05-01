import { connect } from 'react-redux';

import MainMeetings from './MainMeetings';
import { populateMeetings } from '../../store/actions/meetings';
import { clearFilters } from '../../store/actions/filters';

const mapDispatchToProps = dispatch => ({
  populateMeetings: (token) => dispatch(populateMeetings(token)),
  clearFilters: () => dispatch(clearFilters())
})


const mapStateToProps = state => ({
  token: state.user.user.token,
  filters: state.filters,
  meetings: state.meetings
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMeetings);