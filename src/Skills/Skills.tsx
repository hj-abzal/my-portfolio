import React from 'react';
import style from './Skills.module.scss';
import containerStyle from './../Common/styles/common-css-styles.module.css'
import { Skill } from './Skill/Skill';
import { Title } from '../Common/components/Title/Title';

export const Skills = () => {

    const description = [
        "fjsdlfjsdafjsdlfjsdlfjf;",
        "fjsdlfjsdafjsdlfjsdlfjf;",
        "fjsdlfjsdafjsdlfjsdlfjf;",
    ]
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <Title text={"Skills"} />
                <div className={style.skills}>
                    <Skill title="HTML" description={description[0]} />
                    <Skill title="CSS" description={description[1]} />
                    <Skill title="JS" description={description[2]} />
                </div>
            </div>
        </div>
    )
}