import React from 'react';
import style from './Main.module.scss';
import myPhoto from '../assets/images/myPhoto.jpg'
import Particles from 'react-particles-js';
import Tilt from 'react-tilt'
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
            <Particles className={style.particles} params={ParticlesParams}/>
            <Fade top>
                <div className={style.container}>
                    <img alt={'personalPhoto'} className={style.photo} src={myPhoto}/>
                    <Tilt options={{max: 25}}>
                        <div className={style.text}>
                            <div className={style.textInner}>
                                <p> Hi there !</p>
                                <h1 className={style.name}> I'm Abzal Suan</h1>
                                <p> A committed FRONT-END developer</p>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </Fade>

        </div >
    )
}