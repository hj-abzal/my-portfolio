import React from 'react';
import SuperButton from '../Common/components/c2-SuperButton/SuperButton';
import { Title } from '../Common/components/Title/Title';
import style from './HireMe.module.scss'
type HireMePropsType = {

}

export const HireMe: React.FC<HireMePropsType> = () => {

    return (
        <div className={style.jobBlock}>
            <div className={style.jobContainer}>
                <h2 className={style.title}>I am considering remote work options</h2>
                <div className={style.buttonsContainer}>
                    <SuperButton ><a href="https://t.me/SuanAbzal" target="_blank">
                        Hire me
                    </a></SuperButton>
                    <SuperButton ><a href={""} download="My_File.pdf">Download CV</a></SuperButton>
                </div>
            </div>
        </div>
    )
}