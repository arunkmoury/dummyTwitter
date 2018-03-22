import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER, 
    LOGOUT, 
    CLEAR_ERROR,
    CLEAR,
    SIGNUP_USER
} from './types';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const clear = () => {
    return {
        type: CLEAR,
    }
}

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

export const signupUser = (email, password) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
            })
            .catch((error) => {
                let errorCode = error.code;
                errorMessage = '';
                if(errorCode==='auth/email-already-in-use'){
                    errorMessage = 'email already used, try login';
                }else if(errorCode==='auth/invalid-email'){
                    errorMessage = 'Email not valid, check again';
                }else if(errorCode==='auth/weak-password'){
                    errorMessage = 'Password is weak'
                }else{
                    errorMessage = 'Something went wrong';
                }
                loginUserFail(dispatch, errorMessage)
            });
    }
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