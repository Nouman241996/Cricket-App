import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actionTypes/types'


export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST,
});
export const fetchUserSuccess = (json) => ({
    type: FETCH_USER_SUCCESS,
    payload: json
});
export const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error
});

export const fetchUSERApi = (data) => {

    
    return async dispatch => {

        //USER request
        dispatch(fetchUserRequest());
        // USER api call and fetch results
        try {
         
                dispatch(fetchUserSuccess(data))
        

        } catch (error) {
             //console.log("USER error:", error);
            dispatch(fetchUserFailure(error))
        }

    }
}




