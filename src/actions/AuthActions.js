import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, LOGOUT, CLEAR_ERROR } from './types';
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
            .catch((error) => {
                let errorCode = error.code;
                errorMessage = '';
                if(errorCode==='auth/user-not-found'){
                    errorMessage = 'Email not found, Check your email';
                }else if(errorCode==='auth/wrong-password'){
                    errorMessage = 'Wrong password, check your password';
                }else{
                    errorMessage = 'Something went wrong';
                }
                loginUserFail(dispatch, errorMessage)
            })
    };
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS, 
        payload: user 
    });
}

const loginUserFail = (dispatch, error) => {
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

export const clearError = () => {
    return {
        type: CLEAR_ERROR,
        payload: ''
    }
    
}