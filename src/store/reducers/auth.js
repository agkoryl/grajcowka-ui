import {
  REGISTER_REQUESTED, REGISTER_SUCCESS, REGISTER_FAIL,
  LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT
} from '../constants';

let token = JSON.parse(sessionStorage.getItem('token'));
const INITIAL_STATE = token ?
  { user: {token: token}, isLoading: false, hasError: false }
  :
  { user: {}, isLoading: false, hasError: false};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
        hasError: false
      }
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    case LOGIN_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
        hasError: false
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    case LOGOUT:
      return {
        ...state,
        user: {},
        isLoading: false, 
        hasError: false
      }
    default:
      return state;
  }
}