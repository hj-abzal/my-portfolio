import React from 'react';
import style from './Projects.module.css';
import containerStyle from './../Common/common-css-styles.module.css'

export const Projects = () => {

    const description = [
        "fjsdlfjsdafjsdlfjsdlfjf;",
        "fjsdlfjsdafjsdlfjsdlfjf;",
        "fjsdlfjsdafjsdlfjsdlfjf;",
    ]
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                   
                </div>
            </div>
        </div>
    )
}