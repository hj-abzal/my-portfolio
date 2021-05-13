import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Nav } from '../Nav/Nav';
import { ChangeAppThemeAC } from '../Redux/portfolioReducer';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import style from './Header.module.css';
import themeStyle from '../Common/appTheme.module.css'


type HeaderPropsType = {
    isLight: boolean
}
export const Header = (props: HeaderPropsType) => {
    const dispatch = useDispatch();
    const changeTheme = () => {
        dispatch(ChangeAppThemeAC(!props.isLight))
    }
    const theme = props.isLight ? `${style.header} ${themeStyle.light}` : `${style.header} ${themeStyle.dark}`
    return (
        <div className={theme}>
            <ThemeButton isLight={props.isLight} changeTheme={changeTheme} />
            <Nav />
        </div>
    )
}