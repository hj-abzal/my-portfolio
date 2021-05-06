import { spawn } from 'node:child_process';
import React from 'react';
import style from './Work.module.css';

type PropsType = {
    title: string
    description: string
}
export const Work = (props: PropsType) => {
    return (
        <div className={style.works}>
            <div className={style.img}></div>
            <div className={style.work}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.labels} >
                <span  className={style.label}>React</span>
                <span  className={style.label}>TypeScript</span>
                </div>
                
                <span className={style.description}>{props.description}</span>

            </div>

        </div>
    )
}