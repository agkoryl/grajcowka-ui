import { SET_FILTERS, CLEAR_FILTERS } from '../constants';

const INITIAL_STATE = {
    meetingName: "",
    meetingLocation: "",
    meetingGame: "",
    meetingHost: "",
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_FILTERS:
            return {
                ...state,
                meetingName: action.filters.meetingName,
                meetingLocation: action.filters.meetingLocation,
                meetingGame: action.filters.meetingGame,
                meetingHost: action.filters.meetingHost,
            }
        case CLEAR_FILTERS:
            return {
                meetingName: "",
                meetingLocation: "",
                meetingGame: "",
                meetingHost: "",
            }
        default:
            return state;
    }
}