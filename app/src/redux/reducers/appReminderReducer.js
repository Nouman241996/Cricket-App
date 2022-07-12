import { FETCH_APPREMINDER_SUCCESS} from '../actionTypes/types'
const initialState = {
   appReminderSuccess: '',
}
const appReminderReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_APPREMINDER_SUCCESS:
            return { ...state,appReminderSuccess: action.payload };
        default:
            return state;



    }



}
export default appReminderReducer;