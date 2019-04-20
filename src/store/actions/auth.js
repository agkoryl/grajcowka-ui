import { LOGIN_SUCCESS } from '../constants';

export const loginUser = (user) => {
return { type: LOGIN_SUCCESS, user}
}