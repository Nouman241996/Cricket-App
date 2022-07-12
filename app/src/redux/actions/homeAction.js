import { FETCH_HOME_REQUEST, FETCH_HOME_SUCCESS, FETCH_HOME_FAILURE } from '../actionTypes/types'
import { getApiSerive } from "../../utills/getDataService";

export const fetchHomeRequest = () => ({
    type: FETCH_HOME_REQUEST,
});
export const fetchHomeSuccess = (json) => ({
    type: FETCH_HOME_SUCCESS,
    payload: json
});
export const fetchHomeFailure = (error) => ({
    type: FETCH_HOME_FAILURE,
    payload: error
});

export const fetchHomeApi = (url) => {

    
    return async dispatch => {

        //Home request
        dispatch(fetchHomeRequest());
        // Home api call and fetch results
        try {
            getApiSerive.getApiClass(url).then((res)=>{
                if(res){
                    dispatch(fetchHomeSuccess(res))
                }else{
                    dispatch(fetchHomeFailure('no data'))
                }
              
            })

        } catch (error) {
             //console.log("home error:", error);
            dispatch(fetchHomeFailure(error))
        }

    }
}

