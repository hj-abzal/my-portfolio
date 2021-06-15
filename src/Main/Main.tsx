import React from 'react';
import style from './Main.module.scss';
import reactImg from '../assets/images/reactimg.png'
import myPhoto from '../assets/images/myPhoto.jpg'

export const Main = () => {

    return (
        <div className={style.mainBlock}>

            <div className={style.container}>
                <img className={style.photo} src={myPhoto}  />
                <div className={style.text}>
                    <span> Hi there !</span>
                    <h1 className={style.name}> I'm Abzal Suan</h1>
                    <p> A commited FRONT-END devoloper</p>
                </div>


            </div>
            {/* <img className={style.logoImg} src={reactImg} alt="" /> */}
        </div >
    )
}