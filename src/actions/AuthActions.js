import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, LOGOUT } from './types';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
                AsyncStorage.setItem('isLogin', JSON.stringify(true));
            })
            .catch((error) => loginUserFail(dispatch, error))
    };
}

const loginUserSuccess = (dispatch, user) => {
    console.log("loginUserSuccess action called");
    dispatch({
        type: LOGIN_USER_SUCCESS, 
        payload: user 
    });
}

const loginUserFail = (dispatch, error) => {
    console.log("loginUserFailed action called");
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: error
    });
}

export const logout = (dispatch) => {
    return(dispatch) => {
        dispatch({ type: LOGOUT});
        firebase.auth().signOut()
            .then(console.log("User signout successfuly"))
            .catch((error) => console.log(error));
    }
}