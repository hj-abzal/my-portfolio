import React from 'react';
import style from './Item.module.css';


type PropsType = {
    title: string
    icon?: string
}
export const Item = (props: PropsType) => {
    return (
        <div className={style.item}>
            <div className={style.icon}>
            </div>
            <div className={style.title}>{props.title}</div>
        </div>
    )
}