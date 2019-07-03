import { SET_USER_MEETINGS } from "../constants";

const initialState = {}

const userMeetings = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_MEETINGS:
            return action.userMeetings
        default:
            return state
    }
}

export default userMeetings;