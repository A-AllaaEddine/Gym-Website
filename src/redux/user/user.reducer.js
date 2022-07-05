import { UserActionTypes } from './user.types'

const INITAIL_STATE = {
    currentUser: null,
    hidden: true,
    userAuth: null
}

const userReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SHOW_USER_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.SET_USERAUTH:
            return {
                ...state,
                userAuth: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;