import React from 'react';
import style from './Main.module.scss';
import reactImg from '../assets/images/reactimg.png'
import myPhoto from '../assets/images/myPhoto.jpg'
import Particles from 'react-particles-js';
//@ts-ignore
import Tilt from 'react-tilt'
//@ts-ignore
import Fade from 'react-reveal/Fade';


const ParticlesParams = {
    "particles": {
        "number": {
            "value": 100
        },
        "size": {
            "value": 1
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            }
        }
    }
}

export const Main = () => {

    return (
        <div id="Main" className={style.mainBlock}>
            <Particles className={style.particles} params={ParticlesParams} />
            <Fade top>
                <div className={style.container}>
                    <Tilt options={{ max: 25 }}  >
                        <img className={style.photo} src={myPhoto} />
                    </Tilt>
                    <Tilt options={{ max: 25 }}  >
                        <div className={style.text}>
                            <span> Hi there !</span>
                            <h1 className={style.name}> I'm Abzal Suan</h1>
                            <p> A commited FRONT-END devoloper</p>
                        </div>
                    </Tilt>
                </div>
            </Fade>

        </div >
    )
}