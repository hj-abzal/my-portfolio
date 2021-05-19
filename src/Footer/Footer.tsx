import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../Redux/Store';
import style from './Footer.module.css';
import { Item } from './Items/Item';

export const Footer = () => {
    const isLight = useSelector<AppStateType, boolean>( state => state.portfolio.isLight)
    const inEnglish = useSelector<AppStateType, boolean>( state => state.portfolio.inEnglish)
  
    return (
        <div className={style.footer}>
            <h3>SUAN</h3>
            <div className={style.items}>
                <Item title="inst" />
                <Item title="VK" />
                <Item title="HH" />
            </div>
            <p>© 2021 Copyright: Abzal Kozhakhmet</p>
        </div>
    )
}