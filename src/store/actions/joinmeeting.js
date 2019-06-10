import {
    JOIN_REQUESTED, JOIN_SUCCESS, JOIN_FAIL,
} from '../constants';
import { get } from '../../api/methods';

const createALink = (meetingID, userId) => {
    const apiLink = `/api/meetings/${meetingID}/invite?player=${userId}`;
    return apiLink;
}


export const joinAMeeting = (meetingId, id, token) => {
    return async (dispatch) => {
        dispatch(markJoinLoading());
        try {
            await get(createALink(meetingId, id), {}, token);
            dispatch(markJoinSuccess());
        } catch (error) {
            dispatch(markJoinError());
            console.log("error")
        }
    }
}

export const markJoinSuccess = () => ({
    type: JOIN_SUCCESS,
});

export const markJoinLoading = () => ({
    type: JOIN_REQUESTED
});

export const markJoinError = () => ({
    type: JOIN_FAIL
});
