import React from 'react';
import { Title } from '../Common/components/Title/Title';
import style from './AboutMe.module.scss'
type AboutMePropsType = {

}

export const AboutMe: React.FC<AboutMePropsType> = () => {

    return (
        <div className={style.AboutMeBlock}>
            <div className={style.descriptios}>
                <div className={style.title}>
                    <h2 className={style.aboutMe} >About me</h2>
                </div>
                <p> I am fully commited and passioned about programming.
                  Future is in our hand, literly we create can create new history through our code.</p>
            </div>
            <div className={style.code}>

            </div>
        </div>
    )
}