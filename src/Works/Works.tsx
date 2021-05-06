import React from 'react';
import style from './Works.module.css';
import containerStyle from './../common/common-css-styles.module.css'
import { Work } from './Work/Work';

export const Works = () => {
    const description = [
        "fjsdlfjsdafjsdlfjsdlfjf;",
    ]
    return (
        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <h2 className={style.title}>My recent works</h2>
                <div className={style.works}>
                    <Work title="Social NetWork" description={description[0]} />
                    <Work title="Todolist app" description={description[0]} />

                </div>
            </div>
        </div>
    )
}