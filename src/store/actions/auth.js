import jwtDecode from 'jwt-decode';

import {
    LOGIN_SUCCESS, LOGIN_REQUESTED, LOGIN_FAIL, LOGOUT,
    REGISTER_REQUESTED, REGISTER_SUCCESS, REGISTER_FAIL
} from '../constants';
import { post } from '../../api/methods';


export const loginUser = (loginData) => {
    return async (dispatch) => {
        dispatch(markLoginLoading());
        try {
            const responseData = await post('/auth/login', loginData);
            const decodedToken = jwtDecode(responseData.token);
            const user = { token: responseData.token, ...decodedToken };
            dispatch(populateLoginData(user));
            sessionStorage.setItem('token', JSON.stringify(responseData.token));
        } catch (error) {
            dispatch(markLoginError());
        }
    }
}

export const registerUser = (registerData) => {
    return async (dispatch) => {
        dispatch(markRegisterLoading());
        try {
            await post('/auth/register', registerData);
            dispatch(populateRegisterData());
        } catch (error) {
            dispatch(markRegisterError());
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

export const logout = () => ({
    type: LOGOUT
});

export const populateRegisterData = (responseData) => ({
    type: REGISTER_SUCCESS,
    user: responseData
});

export const markRegisterLoading = () => ({
    type: REGISTER_REQUESTED
});

export const markRegisterError = () => ({
    type: REGISTER_FAIL
});
