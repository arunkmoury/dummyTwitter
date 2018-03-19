import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, LOGOUT } from '../actions/types';

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
            return {...state, error: action.error, loading: false,};
        case LOGOUT:
            return {...state, ...INITIAL_STATE};
        default:
            return state;
    }
}