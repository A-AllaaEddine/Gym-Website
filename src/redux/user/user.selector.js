import { createSelector } from "reselect";

const selectUser = state => state.user;



export const showDropDown = createSelector(
    [selectUser],
    user => user.hidden
);

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectUserAuth = createSelector(
    [selectUser],
    user => user.userAuth
)