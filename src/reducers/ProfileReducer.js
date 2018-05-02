import {
    GET_NAME,
    GET_PROFILE,
    GET_EMAIL
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    email: '',
    loading: false
}

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_NAME:
            return {...state, name: action.payload, loading: false};
        case GET_PROFILE:
            return {...state, loading: true,}
        case GET_EMAIL:
            return {...state, email: action.payload, loading: false};
        default:
            return state;
    }
}