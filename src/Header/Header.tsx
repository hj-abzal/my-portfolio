import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from '../Nav/Nav';
import { ChangeAppLanguageAC, ChangeAppThemeAC } from '../Redux/portfolioReducer';
import { ThemeButton } from './ThemeButton/ThemeButton';
import style from './Header.module.css';
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
    return (
        <div className={style.header}>
            <div className={style.content}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" className={style.appLogo} />
                <LangSwitcher inEnglish={inEnglish} changeLang={changeLang} />
                <ThemeButton isLight={isLight} onClick={changeTheme} />
                <Nav headerData={headerData} isEnglish={inEnglish} />
            </div>
        </div>
    )
}