import React from 'react';
import style from './Project.module.css';

type PropsType = {
    title: string
    description: string
    style?: { color: string; backgroundImage: string; }
}
export const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <div style={props.style} className={style.img}>
                <a href="">смотреть</a>
            </div>
            <div className={style.descriptionBlock}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>


        </div>
    )
}