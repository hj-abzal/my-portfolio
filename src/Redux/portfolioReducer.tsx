import React from 'react';




type ActionType = ChangeAppThemeAT | ChangeAppLanguageAT
type ChangeAppThemeAT = ReturnType<typeof ChangeAppThemeAC>
type ChangeAppLanguageAT = ReturnType<typeof ChangeAppLanguageAC>


export type InitialStateType = {
    isLight: boolean
    inEnglish: boolean
}
export const initialState = {
    isLight: true,
    inEnglish: true,
    header: {
        inRussian: []
    }
}

export const portfolioReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGE_APP_THEME":
            return { ...state, isLight: action.isLight }
        case "CHANGE_APP_LANGUAGE":
            return { ...state, inEnglish: action.inEnglish }
        default:
            return state
    }
}


const CHANGE_APP_THEME = "CHANGE_APP_THEME"
export const ChangeAppThemeAC = (isLight: boolean) => {
    return {
        type: CHANGE_APP_THEME,
        isLight
    } as const
}

const CHANGE_APP_LANGUAGE = "CHANGE_APP_LANGUAGE"
export const ChangeAppLanguageAC = (inEnglish: boolean) => {
    return {
        type: CHANGE_APP_LANGUAGE,
        inEnglish
    } as const
}