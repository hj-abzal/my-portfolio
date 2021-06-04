import React from 'react';
import { Title } from '../Common/components/Title/Title';
import style from './HireMe.module.scss'
type HireMePropsType = {

}

export const HireMe: React.FC<HireMePropsType> = () => {

    return (
        <div className={style.hireMeBlock}>
            <div className={style.hireMeContainer}>
                <Title text={"Hire Me"} />
                <div className={style.timer}>
                    таймер
                </div>
            </div>
        </div>
    )
}