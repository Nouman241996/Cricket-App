import { FETCH_GameSwitcher_SUCCESS,FETCH_DRAWERSWITCHER_SUCCESS} from '../actionTypes/types'
const initialState = {
   gameSwitcherSuccess: false,
   drawerSwitcherSuccess: '',
}
const gameSwitcherReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_GameSwitcher_SUCCESS:
            return { ...state,gameSwitcherSuccess: action.payload };
            case FETCH_DRAWERSWITCHER_SUCCESS:
            return { ...state,drawerSwitcherSuccess: action.payload };
        default:
            return state;



    }



}
export default gameSwitcherReducer;