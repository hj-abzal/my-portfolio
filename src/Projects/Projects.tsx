import React from 'react';
import style from './Projects.module.scss';
import { Project } from './Project/Project';
import { Title } from '../Common/components/Title/Title';
import todoimg from './../assets/images/Без названия.png'
import socislNetworkImg from './../assets/images/socialNetwork.jpg'
import counterIMG from './../assets/images/first.png'
import MountainsImg from './../assets/images/second.jpg'
//@ts-ignore
import Fade from 'react-reveal/Fade';

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
        "TS, Redux, RestAPI, Thunk,ANT Design,  Unit Tests",
        "TS, Redux, RestAPI, Thunk,Material UI, Unit Tests",
        "...in progress",
    ];
    const linkName = [
        "https://hyojeong-abzal.github.io/todolist/",
        "https://hyojeong-abzal.github.io/social-network/",
        "https://hyojeong-abzal.github.io/marvelHeroes/",
        "...in progress",
    ]


    return (
        <div className={style.projectsBlock}>
            <div id="Projects" className={style.projectsContainer}>
                <Title text={"Projects"} />
                <div className={style.projects}>
                    <Fade left>
                        <Project linkName={linkName[0]} style={todoImg} title="TODOLIST" description={description[0]} />
                        <Project linkName={linkName[1]} style={socislNetwork} title="THE SOCIAL NETWORK" description={description[1]} />
                    </Fade>
                    <Fade right>
                        <Project linkName={linkName[2]} style={counterImg} title="MARVEL FUN APP" description={description[2]} />
                        <Project style={futureProjectImg} title="FUTURE PROJECT" description={description[3]} />
                    </Fade>
                </div>
            </div>
        </div>
    )
}