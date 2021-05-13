import React from 'react';




type ActionType = ChangeAppThemeAT
type ChangeAppThemeAT = ReturnType<typeof ChangeAppThemeAC>

type InitialStateType = {
    isLight: boolean
}
export const initialState = {
    isLight: true
}

const portfolioReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGE_APP_THEME":
            return { ...state, isLight: action.isLight }
        default:
            return state
    }
}


const CHANGE_APP_THEME = "CHANGE_APP_THEME"
const ChangeAppThemeAC = (isLight: boolean) => {
    return {
        type: CHANGE_APP_THEME,
        isLight
    } as const
}