import React from 'react';
import style from './Projects.module.scss';
import {Project} from './Project/Project';
import {Title} from '../common/components/Title/Title';
import todoimg from './../assets/images/Без названия.png'
import socislNetworkImg from './../assets/images/socialNetwork.jpg'
import marvelIMG from './../assets/images/first.png'
import MountainsImg from './../assets/images/second.jpg'
import planktonicsPng from './../assets/images/planktonics.png'
import map from './../assets/images/map.png'

export const Projects = () => {
    const todoImg = {
        color: 'blue',
        backgroundImage: `url(${todoimg})`,
    };
    const socislNetwork = {
        color: 'blue',
        backgroundImage: `url(${socislNetworkImg})`,
    };
    const marverlImg = {
        color: 'blue',
        backgroundImage: `url(${marvelIMG})`,
    };
    const futureProjectImg = {
        color: 'blue',
        backgroundImage: `url(${MountainsImg})`,
    };
    const planktonicsStyle = {
        color: 'blue',
        backgroundImage: `url(${planktonicsPng})`,
    };
    const mapImg = {
        color: 'blue',
        backgroundImage: `url(${map})`,
    };

    const description = [
        "TS, Redux, RestAPI, Thunk, Material UI, Unit Tests",
        "TS, Redux, RestAPI, Thunk, Ant-design,  Unit Tests",
        "TS, Redux, Thunk,Material UI, React-router-dom",
        "...in progress",
        "TS, Redux, AXIOS, Thunk, Ant-design"
    ];
    const linkName = [
        "https://hj-abzal.github.io/todolist/",
        "https://hj-abzal.github.io/social-network/",
        "https://hj-abzal.github.io/marvelHeroes/",
        "https://github.com/hj-abzal",
        "https://hj-abzal.github.io/TOT-Systems-network",
        "https://project-learning-cards.github.io/learning-cards"
    ]


    return (
        <div className={style.projectsBlock}>
            <div id="Projects" className={style.projectsContainer}>
                <Title text={"Projects"} />
                <div className={style.projects}>
                    <Project linkName={linkName[0]} style={todoImg} title="TODOLIST" description={description[0]} />
                    <Project linkName={linkName[1]} style={socislNetwork} title="THE SOCIAL NETWORK" description={description[1]} />
                    <Project linkName={linkName[2]} style={marverlImg} title="MARVEL FUN APP" description={description[2]} />
                    <Project linkName={linkName[4]} style={planktonicsStyle} title="PlANKTONICS MESSENGER" description={description[2]} />
                    <Project linkName={linkName[5]} style={mapImg} title="EDUCATION CARDS (MAP)" description={description[4]} />
                    <Project linkName={linkName[3]} style={futureProjectImg} title="FUTURE PROJECT" description={description[3]} />
                </div>
            </div>
        </div>
    )
}