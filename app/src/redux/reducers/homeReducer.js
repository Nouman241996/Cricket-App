import { FETCH_HOME_REQUEST, FETCH_HOME_SUCCESS, FETCH_HOME_FAILURE } from '../actionTypes/types'
const initialState = {
   homeRequest: false,
   homeSuccess: [],
   homeFailure: ''
}
const homeReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_HOME_REQUEST:
            return { ...state,homeRequest: true };

        case FETCH_HOME_SUCCESS:
            return { ...state,homeRequest: false,homeSuccess: action.payload };

        case FETCH_HOME_FAILURE:
            return { ...state,homeRequest: false,homeFailure: action.payload };

        default:
            return state;



    }



}
export default homeReducer;