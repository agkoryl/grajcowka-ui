
import {
  MEETING_REQUESTED, MEETING_SUCCESS, MEETING_FAIL,
} from '../constants';


const INITIAL_STATE = { isLoading: false, hasError: false}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MEETING_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case MEETING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
      }
    case MEETING_FAIL:
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    default:
      return state;
  }
}