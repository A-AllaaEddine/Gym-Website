import { SubTypes } from './sub.types';


export const setGymName = (gymName) => ({
    type: SubTypes.SET_GYM_NAME,
    payload: gymName
})
export const setPackageType = (packageType) => ({
    type: SubTypes.SET_PACKAGE_TYPE,
    payload: packageType
})

export const setSelectedPackage = (selectedPackage) => ({
    type: SubTypes.SET_SELECTED_PACKAGE,
    payload: selectedPackage
})

export const toggleCalendarHidden = () => ({
    type: SubTypes.TOGGLE_CALENDAR_HIDDEN
})

export const setSelectedDate = (selectedDate) => ({
    type: SubTypes.SET_SELECTED_DATE,
    payload: selectedDate
})


export const clearSub = () => ({
    type: SubTypes.CLEAR_SUB,
})