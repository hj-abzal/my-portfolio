import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from '../Nav/Nav';
import { ChangeAppLanguageAC, ChangeAppThemeAC } from '../Redux/portfolioReducer';
import { ThemeButton } from './ThemeButton/ThemeButton';
import style from './Header.module.css';
import themeStyle from '../Common/appTheme.module.css'
import { AppStateType } from '../Redux/Store';
import { LangSwitcher } from './LaguageSwitcher/LangSwitcher';


type HeaderPropsType = {

}

export type HeaderDataType = {
    inRussian: string[];
    inEnglish: string[];
}
export const Header = (props: HeaderPropsType) => {
    const isLight = useSelector<AppStateType, boolean>(state => state.portfolio.isLight)
    const inEnglish = useSelector<AppStateType, boolean>(state => state.portfolio.inEnglish)

    const dispatch = useDispatch();
    const changeTheme = () => {
        dispatch(ChangeAppThemeAC(!isLight))
    }
    const changeLang = () => {
        dispatch(ChangeAppLanguageAC(!inEnglish))
    }
    const headerData = useSelector<AppStateType, HeaderDataType>(store => store.data.header)
    const theme =  `${style.header} ${themeStyle.dark}`
    return (
        <div className={theme}>
            <LangSwitcher inEnglish={inEnglish} changeLang={changeLang} />
            <ThemeButton isLight={isLight} changeTheme={changeTheme} />
            <Nav headerData={headerData} isEnglish={inEnglish} isLight={isLight} />
        </div>
    )
}