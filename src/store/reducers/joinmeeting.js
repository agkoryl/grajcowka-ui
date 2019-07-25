
import {
    JOIN_REQUESTED, JOIN_SUCCESS, JOIN_FAIL,
} from '../constants';


const INITIAL_STATE = { isLoading: false, hasError: false }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JOIN_REQUESTED:
            return {
                ...state,
                isLoading: true
            }
        case JOIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
            }
        case JOIN_FAIL:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        default:
            return state;
    }
}