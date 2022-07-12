import { FETCH_GameSwitcher_REQUEST, FETCH_GameSwitcher_SUCCESS, FETCH_GameSwitcher_FAILURE, FETCH_APPREMINDER_SUCCESS } from '../actionTypes/types'
import { getApiSerive } from "../../utills/getDataService";

export const fetchAppReminderSuccess = (json) => ({
    type: FETCH_APPREMINDER_SUCCESS,
    payload: json
});
export const fetchAppReminderApi = (value) => {

    console.log("App Reminder value is:",value)
    
    return async dispatch => {

      
        try {
          
                dispatch(fetchAppReminderSuccess(value))
           

        } catch (error) {
             //console.log("GameSwitcher error:", error);
            // dispatch(fetchGameSwitcherFailure(error))
        }

    }
}

