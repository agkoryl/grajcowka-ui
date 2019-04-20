import { SET_MEETINGS } from "../constants";

const initialState = []

const meetings = (state = initialState, action) => {

    switch (action.type) {
        case SET_MEETINGS:
            return action.meetings
        default:
            return state
    }
}

export default meetings;
