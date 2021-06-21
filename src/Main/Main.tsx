import React from 'react';
import style from './Main.module.scss';
import reactImg from '../assets/images/reactimg.png'
import myPhoto from '../assets/images/myPhoto.jpg'
import Particles from 'react-particles-js';
//@ts-ignore
import Fade from 'react-reveal/Fade';


const ParticlesParams = {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

export const Main = () => {

    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={ParticlesParams} />
            <Fade top>
                <div className={style.container}>
                    <img className={style.photo} src={myPhoto} />
                    <div className={style.text}>
                        <span> Hi there !</span>
                        <h1 className={style.name}> I'm Abzal Suan</h1>
                        <p> A commited FRONT-END devoloper</p>
                    </div>


                </div>
            </Fade>

        </div >
    )
}