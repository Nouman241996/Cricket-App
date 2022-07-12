import {FETCH_GameSwitcher_SUCCESS,FETCH_DRAWERSWITCHER_SUCCESS } from '../actionTypes/types'
import { getApiSerive } from "../../utills/getDataService";

export const fetchGameSwitcherSuccess = (json) => ({
    type: FETCH_GameSwitcher_SUCCESS,
    payload: json
});
export const fetchDrawerSwitcherSuccess = (json) => ({
    type: FETCH_DRAWERSWITCHER_SUCCESS,
    payload: json
});
export const fetchGameSwitcherApi = (value) => {

    console.log("switcher value is:",value)
    
    return async dispatch => {

      
        try {
          
                dispatch(fetchGameSwitcherSuccess(value))
           

        } catch (error) {
             //console.log("GameSwitcher error:", error);
            // dispatch(fetchGameSwitcherFailure(error))
        }

    }
}

export const fetchDrawerSwitcher = (value) => {

    console.log("switcher value is:",value)
    
    return async dispatch => {

      
        try {
          
                dispatch(fetchDrawerSwitcherSuccess(value))
           

        } catch (error) {
             //console.log("GameSwitcher error:", error);
            // dispatch(fetchGameSwitcherFailure(error))
        }

    }
}


