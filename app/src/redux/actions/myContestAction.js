import { FETCH_MYCONTEST_REQUEST, FETCH_MYCONTEST_SUCCESS, FETCH_MYCONTEST_FAILURE } from '../actionTypes/types'
import { getApiSerive } from "../../utills/getDataService";

export const fetchMyContestRequest = () => ({
    type: FETCH_MYCONTEST_REQUEST,
});
export const fetchMyContestSuccess = (json) => ({
    type: FETCH_MYCONTEST_SUCCESS,
    payload: json
});
export const fetchMyContestFailure = (error) => ({
    type: FETCH_MYCONTEST_FAILURE,
    payload: error
});

export const fetchMyContestApi = (url) => {

    
    return async dispatch => {

        //MyContest request
        dispatch(fetchMyContestRequest());
        // MyContest api call and fetch results
        try {
            getApiSerive.getApiClass(url).then((res)=>{
                //console.log("My Contest  data is:",res)
                dispatch(fetchMyContestSuccess(res))
            })

        } catch (error) {
             //console.log("MyContest error:", error);
            dispatch(fetchMyContestFailure(error))
        }

    }
}




