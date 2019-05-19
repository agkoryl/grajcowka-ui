import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import AddAMeeting from './AddAMeeting';
import { addAMeeting } from '../../store/actions/addmeeting';
import { populateGames } from '../../store/actions/games';


const mapStateToProps = state => ({
  userId: state.user.user.id,
  token: state.user.user.token,
  games: state.games
})

const mapDispatchToProps = dispatch => ({
  addAMeeting: (meetingData, token) => dispatch(addAMeeting(meetingData, token)),
  populateGames: (token) => dispatch(populateGames(token))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAMeeting));