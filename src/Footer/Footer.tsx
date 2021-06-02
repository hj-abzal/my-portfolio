import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../Redux/Store';
import style from './Footer.module.scss';
import { Item } from './Items/Item';

export const Footer = () => {
  
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