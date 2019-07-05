import { SET_USER_MEETINGS } from "../constants";

import { get } from '../../api/methods';



export const populateUserMeetings = (token) => {
    return async (dispatch) => {
        get('/api/profile/meetings', {}, token)
        .then( 
            userMeetings => dispatch(setUserMeetings(userMeetings))
        ).catch(error => console.error(error))
    }
  }



export const setUserMeetings = (userMeetings) => ({
    type: SET_USER_MEETINGS, userMeetings
})