import React from 'react';
import style from './Main.module.css';
import containerStyle from './../Common/styles/common-css-styles.module.css'
import { useSelector } from 'react-redux';
import { AppStateType } from '../Redux/Store';

export const Main = () => {
    const isLight = useSelector<AppStateType, boolean>(state => state.portfolio.isLight)

    const theme = isLight ? style.mainBlock : style.darkMode
    return (
        <div className={theme}>
            <div className={containerStyle.container}>
                <div className={style.text}>
                    <span> Hi there !</span>
                    <h1 className={style.name}> I am Abzal Suan</h1>
                    <p>FRONT-END devoloper</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div >
    )
}