import React from 'react';
import style from './Skills.module.css';
import containerStyle from './../common/common-css-styles.module.css'
import { Skill } from './Skill/Skill';

export const Skills = () => {
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
                    <Skill title="HTML" description={description[0]} />
                    <Skill title="CSS" description={description[1]} />
                    <Skill title="JS" description={description[2]} />
                </div>
            </div>
        </div>
    )
}