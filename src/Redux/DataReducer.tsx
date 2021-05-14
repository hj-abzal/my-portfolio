import React from 'react';



type ActionType = ChangeAppThemeAT | ChangeAppLanguageAT
type ChangeAppThemeAT = ReturnType<typeof ChangeAppThemeAC>
type ChangeAppLanguageAT = ReturnType<typeof ChangeAppLanguageAC>

export type DataType = typeof data 

export const data = {
    header: {
        inRussian: ["Главная", "Навыки", "Проекты", "Контакты"],
        inEnglish: ["Homepage", "Skills", "Projects", "Contacts"]
    }
}


export const dataReducer = (state: DataType = data, action: ActionType) => {
    switch (action.type) {

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