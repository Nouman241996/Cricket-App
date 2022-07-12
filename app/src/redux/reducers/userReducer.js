import {  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actionTypes/types'
const initialState = {
   userRequest: false,
   userSuccess: '',
   userFailure: ''
}
const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            return { ...state,userRequest: true };

        case FETCH_USER_SUCCESS:
            return { ...state,userRequest: false,userSuccess: action.payload };

        case FETCH_USER_FAILURE:
            return { ...state,userRequest: false,userFailure: action.payload };

        default:
            return state;



    }



}
export default userReducer;