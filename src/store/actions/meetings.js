import { SET_MEETINGS } from "../constants";

import { get } from '../../api/methods';



export const populateMeetings = (token) => {
    return async (dispatch) => {
        get('/api/meetings', {}, token)
        .then( 
            meetings => dispatch(setMeetings(meetings))
        ).catch(error => console.error(error))
    }
  }



export const setMeetings = (meetings) => ({
    type: SET_MEETINGS, meetings
})