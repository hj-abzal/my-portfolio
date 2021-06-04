import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../Redux/Store';
import style from './Footer.module.scss';
import insImg from '../assets/images/instagram.png'
import telegramImg from '../assets/images/telegram.png'
import linkedInImg from '../assets/images/linkedin.png'


export const Footer = () => {

    return (
        <div className={style.footer}>
            <h3>SUAN</h3>
            <div className={style.items}>
                <div className={style.inst}>
                    <img className={style.instImg} src={`${insImg}`} alt="" />
                </div>
                <div className={style.linkedIn}>
                    <img className={style.linkedInImg} src={`${linkedInImg}`} alt="" />
                </div>
                <div className={style.tele}>
                    <img className={style.teleImg} src={`${telegramImg}`} alt="" />
                </div>
            </div>
            <p>© 2021 Copyright: Abzal Kozhakhmet</p>
        </div>
    )
}