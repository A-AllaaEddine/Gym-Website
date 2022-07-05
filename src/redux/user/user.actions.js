import { UserActionTypes } from './user.types';

export const showUserDropDown = () => ({
    type: UserActionTypes.SHOW_USER_DROPDOWN
})

export const setCurrentUser = user => ({
    type : UserActionTypes.SET_CURRENT_USER,
    payload : user 
})

export const setUserAuth = userAuth => ({
    type: UserActionTypes.SET_USERAUTH,
    payload: userAuth
})