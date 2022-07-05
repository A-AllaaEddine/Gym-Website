import { createSelector } from 'reselect';

const selectSub = state => state.subscription;



export const selectGymName = createSelector(
    [selectSub],
    subscription => subscription.gymName
)

export const selectPackageType = createSelector(
    [selectSub],
    subscription => subscription.packageType
)

export const selectSelectedPackage = createSelector(
    [selectSub],
    subscription => subscription.selectedPackage
)

export const selectCalendarHidden = createSelector(
    [selectSub],
    subscription => subscription.calendarHidden
)

export const selectSelctedDate = createSelector(
    [selectSub],
    subscription => subscription.selectedDate
) 
