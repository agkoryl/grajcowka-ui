import { LOGIN_SUCCESS, LOGIN_REQUESTED, LOGIN_FAIL } from '../constants';
import { post } from '../../api/methods';

export const loginUser = (loginData) => {
  return async (dispatch) => {
    dispatch(markLoginLoading());
    try {
      const responseData = await post('/auth/login', loginData);
      const user = {token: responseData.token};
      dispatch(populateLoginData(user));
      sessionStorage.setItem('token', JSON.stringify(responseData.token));
    } catch (error) {
      dispatch(markLoginError());
    }
  }
}


export const populateLoginData = (user) => {
  return { type: LOGIN_SUCCESS, user }
}

export const markLoginLoading = () => ({
  type: LOGIN_REQUESTED
});

export const markLoginError = () => ({
  type: LOGIN_FAIL
});

