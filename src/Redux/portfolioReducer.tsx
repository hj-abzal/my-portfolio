import React from 'react';




type ActionType = ChangeAppThemeAT | ChangeAppLanguageAT | setErrorType
type ChangeAppThemeAT = ReturnType<typeof ChangeAppThemeAC>
type ChangeAppLanguageAT = ReturnType<typeof ChangeAppLanguageAC>
type setErrorType = ReturnType<typeof setError>


export type InitialStateType = {
    isLight: boolean
    inEnglish: boolean
    error: string | null
}
export const initialState = {
    isLight: true,
    inEnglish: true,
    error: null
}

export const portfolioReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE_APP_THEME":
            return { ...state, isLight: action.isLight }
        case "CHANGE_APP_LANGUAGE":
            return { ...state, inEnglish: action.inEnglish }
        case "SET_ERROR":
            return { ...state, error: action.error }
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

const SET_ERROR = "SET_ERROR"
export const setError = (error: string | null) => {
    return {
        type: SET_ERROR,
        error
    } as const
}