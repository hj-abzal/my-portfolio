import React from 'react';
import style from './Projects.module.scss';
import { Project } from './Project/Project';
import { Title } from '../Common/components/Title/Title';
import todoimg from './../assets/images/Без названия.png'
import socislNetworkImg from './../assets/images/socialNetwork.jpg'
import counterIMG from './../assets/images/0146b208ea03030180546bfca175b79e.jpg'
import MountainsImg from './../assets/images/Mountains.jpg'


export const Projects = () => {

    const todoImg = {
        color: 'blue',
        backgroundImage: `url(${todoimg})`,
    };
    const socislNetwork = {
        color: 'blue',
        backgroundImage: `url(${socislNetworkImg})`,
    };
    const counterImg = {
        color: 'blue',
        backgroundImage: `url(${counterIMG})`,
    };
    const futureProjectImg = {
        color: 'blue',
        backgroundImage: `url(${MountainsImg})`,
    };

    const description = [
        "TS, Redux, RestAPI, Thunk,Material UI, Unit Tests",
        "TS, Redux, RestAPI, Thunk,ANT Design,     Unit Tests",
        "My first project with React/Redux/TS.       I left It here as a memory.",
        "...in progress",
    ]


    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={"Projects"} />
                <div className={style.projects}>
                    <Project style={todoImg} title="TODOLIST" description={description[0]} />
                    <Project style={socislNetwork} title="THE SOCIAL NETWORK" description={description[1]} />
                    <Project style={counterImg} title="COUNTER" description={description[2]} />
                    <Project style={futureProjectImg} title="FUTURE PROJECT" description={description[3]} />
                </div>
            </div>
        </div>
    )
}