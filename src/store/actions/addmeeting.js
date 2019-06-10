
import {
    MEETING_REQUESTED, MEETING_SUCCESS, MEETING_FAIL,
} from '../constants';
import { post } from '../../api/methods';



export const addAMeeting = (meetingData, token) => {
    return async (dispatch) => {
        dispatch(markMeetingLoading());
        try {
            await post('/api/meetings', meetingData, token);
            dispatch(markMeetingSuccess());
        } catch (error) {
            dispatch(markMeetingError());
        }
    }
}

export const markMeetingSuccess = () => ({
    type: MEETING_SUCCESS,
});

export const markMeetingLoading = () => ({
    type: MEETING_REQUESTED
});

export const markMeetingError = () => ({
    type: MEETING_FAIL
});
