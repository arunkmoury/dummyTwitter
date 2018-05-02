import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER, 
    LOGOUT, 
    CLEAR_ERROR,
    CLEAR,
    SIGNUP_USER,
    NAME_CHANGED
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

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    }
}

export const clear = () => {
    return {
        type: CLEAR,
    }
}

export const loginUser = (email, password) => {

    return (dispatch) => {
        if(email === ''){
            loginUserFail(dispatch, "Email cannot be blank")
        }else if(password === ''){
            loginUserFail(dispatch, "Password cannot be blank")
        }else (
            dispatch({ type: LOGIN_USER }),
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
        );
    }
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

export const signupUser = (name, email, password) => {
    return (dispatch) => {
        if(name === ''){
            loginUserFail(dispatch, "Name cannot be blank")
        }else if(email === ''){
            loginUserFail(dispatch, "Email cannot be blank")
        }else if(password === ''){
            loginUserFail(dispatch, "Password cannot be blank")
        }else (
            dispatch({ type: SIGNUP_USER }),
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    user.updateProfile({
                        displayName: name,
                    }).then(() => console.log("name inserted"))
                    .catch(() => console.log("error during name instered"));
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
                })
        )
    }
}

export const logout = (dispatch) => {
    return(dispatch) => {
        dispatch({ type: LOGOUT, payload: '' });
        console.log("inside logout action")
        firebase.auth().signOut()
            .then(console.log("User signout successfuly"))
            .catch((error) => console.log("error"));
    }
}
 
export const clearError = () => {
    return {
        type: CLEAR_ERROR,
        payload: ''
    }
}