import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, LOGOUT, CLEAR_ERROR } from '../actions/types';

const INITIAL_STATE = {
    user: '',
    error: '',
    loading: false,
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {...state, loading: true,}
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload, loading: false, error: ''};
        case LOGIN_USER_FAIL:
            return {...state, error: action.payload, loading: false,};
        case LOGOUT:
            return {...state, ...INITIAL_STATE};
        case CLEAR_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}