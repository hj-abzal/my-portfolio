import React from 'react';
import style from './Projects.module.scss';
import { Project } from './Project/Project';
import { Title } from '../Common/components/Title/Title';
import todoimg from './../assets/images/Без названия.png'
import socislNetworkImg from './../assets/images/1(1).png'

export const Projects = () => {

    const todoImg = {
        color: 'blue',
        backgroundImage: `url(${todoimg})`,
    };
    const socislNetwork = {
        color: 'blue',
        backgroundImage: `url(${socislNetworkImg})`,
    };

    const description = [
        "fjsdlfjsdafjsdlfjsdlfjf;",
        "fjsdlfjsdafjsdlfjsdlfjf;",
        "fjsdlfjsdafjsdlfjsdlfjf;",
    ]
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={"Projects"} />
                <div className={style.projects}>
                    <Project style={todoImg} title="HTML" description={description[0]} />
                    <Project style={socislNetwork} title="CSS" description={description[1]} />
                    <Project title="JS" description={description[2]} />
                    <Project title="JS" description={description[2]} />
                </div>
            </div>
        </div>
    )
}