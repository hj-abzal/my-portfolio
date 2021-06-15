import React from 'react';
import style from './Project.module.scss';

type PropsType = {
    title: string
    description: string
    style?: { color: string; backgroundImage: string; }
    linkName?: string
}
export const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <div style={props.style} className={style.img}>
                <a href={props.linkName} target="_blank">
                    View
                </a>
            </div>
            <div className={style.descriptionBlock}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    )
}