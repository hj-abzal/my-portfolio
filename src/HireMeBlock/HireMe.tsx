import React from 'react';
import SuperButton from '../common/components/c2-SuperButton/SuperButton';
import style from './HireMe.module.scss'
import cv from '../assets/cv/AbzalSuan.pdf'

type HireMePropsType = {

}

export const HireMe: React.FC<HireMePropsType> = () => {

    return (
        <div className={style.jobBlock}>
            <div className={style.jobContainer}>
                <h2 className={style.title}>I am considering remote work options</h2>
                <div className={style.buttonsContainer}>
                    <SuperButton><a href="https://t.me/SuanAbzal" rel="noreferrer" target="_blank">
                        Hire me
                    </a></SuperButton>
                    <SuperButton><a href={cv} download="AbzalSuan.pdf">Download CV</a></SuperButton>
                </div>
            </div>
        </div>
    )
}