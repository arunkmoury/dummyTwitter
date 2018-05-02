import { 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER, 
    LOGOUT, 
    CLEAR_ERROR, 
    SIGNUP_USER, 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CLEAR,
    NAME_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: '',
    error: '',
    loading: false,
    name: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CLEAR:
            return { ...state, email: '', password: '' };
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, error: '' };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload, error: '' };
        case NAME_CHANGED:
            return {...state, name: action.payload, error: ''};
        case LOGIN_USER:
            return {...state, loading: true,}
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload, loading: false, error: ''};
        case LOGIN_USER_FAIL:
            return {...state, error: action.payload, loading: false,};
        case SIGNUP_USER:
            return {...state, loading: true,}
        case LOGOUT:
            return {...state, ...INITIAL_STATE};
        case CLEAR_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}