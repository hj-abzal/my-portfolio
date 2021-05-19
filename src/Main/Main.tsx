import React from 'react';
import style from './Main.module.css';
import containerStyle from './../Common/common-css-styles.module.css'
import { useSelector } from 'react-redux';
import { AppStateType } from '../Redux/Store';
import { ThemeButton } from '../Header/ThemeButton/ThemeButton';

export const Main = () => {
    const isLight = useSelector<AppStateType, boolean>(state => state.portfolio.isLight)
    const inEnglish = useSelector<AppStateType, boolean>(state => state.portfolio.inEnglish)

    const theme = isLight ? style.mainBlock : style.darkMode
    return (
        <div className={theme}>
            <div className={containerStyle.container}>
                <div className={style.text}>
                    <span> Hi there !</span>
                    <h1> I am Abzal Suan</h1>
                    <p>FRONT-END devoloper</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div >
    )
}