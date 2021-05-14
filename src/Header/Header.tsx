import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from '../Nav/Nav';
import { ChangeAppLanguageAC, ChangeAppThemeAC } from '../Redux/portfolioReducer';
import { ThemeButton } from './ThemeButton/ThemeButton';
import style from './Header.module.css';
import themeStyle from '../Common/appTheme.module.css'
import { AppStateType } from '../Redux/Store';
import { LangSwitcher } from './LaguageSwitcher/LangSwitcher';


type HeaderPropsType = {
    isLight: boolean
    inEnglish: boolean
}

export type HeaderDataType = {
    inRussian: string[];
    inEnglish: string[];
}
export const Header = (props: HeaderPropsType) => {
    const dispatch = useDispatch();
    const changeTheme = () => {
        dispatch(ChangeAppThemeAC(!props.isLight))
    }
    const changeLang = () => {
        dispatch(ChangeAppLanguageAC(!props.inEnglish))
    }
    const headerData = useSelector<AppStateType, HeaderDataType>(store => store.data.header)
    const theme = props.isLight ? `${style.header} ${themeStyle.light}` : `${style.header} ${themeStyle.dark}`
    return (
        <div className={theme}>
            <LangSwitcher inEnglish={props.inEnglish} changeLang={changeLang} />
            <ThemeButton isLight={props.isLight} changeTheme={changeTheme} />
            <Nav headerData={headerData} isEnglish={props.inEnglish}  isLight={props.isLight}/>
        </div>
    )
}