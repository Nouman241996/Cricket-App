import {  FETCH_MYCONTEST_REQUEST, FETCH_MYCONTEST_SUCCESS, FETCH_MYCONTEST_FAILURE } from '../actionTypes/types'
const initialState = {
   myContestRequest: false,
   myContestSuccess: [],
   myContestFailure: ''
}
const myContestReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_MYCONTEST_REQUEST:
            return { ...state,myContestRequest: true };

        case FETCH_MYCONTEST_SUCCESS:
            return { ...state,myContestRequest: false,myContestSuccess: action.payload };

        case FETCH_MYCONTEST_FAILURE:
            return { ...state,myContestRequest: false,myContestFailure: action.payload };

        default:
            return state;



    }



}
export default myContestReducer;