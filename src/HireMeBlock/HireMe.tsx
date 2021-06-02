import React from 'react';
import { Title } from '../Common/components/Title/Title';
import style from './HireMe.module.scss'
type HireMePropsType = {

}

export const HireMe: React.FC<HireMePropsType> = () => {

    return (
        <div className={style.hireMeBlock}>
            <Title text={"Hire Me"} />
            <div>

                таймер
            </div>
        </div>
    )
}