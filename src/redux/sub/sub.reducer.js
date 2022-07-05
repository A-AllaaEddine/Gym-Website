
import { SubTypes } from './sub.types';

const INITIAL_STATE = {
    gymName: null,
    packageType: null,
    selectedPackage: null,
    selectedDate: null,
    calendarHidden: null
}

const subReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SubTypes.SET_GYM_NAME:
            return {
                ...state,
                gymName: action.payload
            }
        case SubTypes.SET_PACKAGE_TYPE:
            return {
                ...state,
                packageType: action.payload
            }
        case SubTypes.SET_SELECTED_PACKAGE:
            return {
                ...state,
                selectedPackage: action.payload
            }
        case SubTypes.TOGGLE_CALENDAR_HIDDEN:
            return {
                ...state,
                calendarHidden: !state.calendarHidden
            }
        case SubTypes.SET_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.payload
            }
        case SubTypes.CLEAR_SUB:
            return {
                ...state,
                subscription: null,
                gymName: null,
                packageType: null,
                selectedPackage: null,
                selectedDate: null
            }
        default:
            return state;
    }
}

export default subReducer;