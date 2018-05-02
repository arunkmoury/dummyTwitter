import {
    GET_NAME,
    GET_PROFILE,
    GET_EMAIL
} from './types';
import firebase from 'firebase';

export const getProfile = () => {
    return (dispatch) => {
        dispatch ({ type: GET_PROFILE });
        let user = firebase.auth().currentUser;
        if (user !== null){
            getName(dispatch, user);
            getEmail(dispatch, user);
        }
    }
}

const getName = (dispatch, user) => {
    dispatch({
        type: GET_NAME,
        payload: user.displayName
    })
}

const getEmail = (dispatch, user) => {
    dispatch({
        type: GET_EMAIL,
        payload: user.email
    })
}