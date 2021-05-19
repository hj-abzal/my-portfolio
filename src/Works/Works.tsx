import React from 'react';
import style from './Works.module.css';
import { Work } from './Work/Work';
import { useSelector } from 'react-redux';
import { AppStateType } from '../Redux/Store';

export const Works = () => {
    const isLight = useSelector<AppStateType, boolean>( state => state.portfolio.isLight)
    const inEnglish = useSelector<AppStateType, boolean>( state => state.portfolio.inEnglish)
  
    const description = [
        "fjsdlfjsdafjsdlfjsdlfjf;",
    ]
    return (
        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <h2 className={style.title}>My recent works</h2>
                <div className={style.works}>
                    <Work title="Social NetWork" description={description[0]} />
                    <Work title="Todolist app" description={description[0]} />

                </div>
            </div>
        </div>
    )
}