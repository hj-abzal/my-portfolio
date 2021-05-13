import React from 'react';
import style from './Main.module.css';
import containerStyle from './../Common/common-css-styles.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
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