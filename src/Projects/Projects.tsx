import React from 'react';
import style from './Projects.module.css';
import containerStyle from './../Common/common-css-styles.module.css'
import { Project } from './Project/Project';
import { Title } from '../Common/components/Title/Title';

export const Projects = () => {

    const description = [
        "fjsdlfjsdafjsdlfjsdlfjf;",
        "fjsdlfjsdafjsdlfjsdlfjf;",
        "fjsdlfjsdafjsdlfjsdlfjf;",
    ]
    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.container} ${style.projectsContainer}`}>
                <Title text={"Projects"} />
                <div className={style.projects}>
                    <Project title="HTML" description={description[0]} />
                    <Project title="CSS" description={description[1]} />
                    <Project title="JS" description={description[2]} />
                    <Project title="JS" description={description[2]} />
                </div>
            </div>
        </div>
    )
}