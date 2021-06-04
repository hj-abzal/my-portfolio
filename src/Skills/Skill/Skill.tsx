import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './Skill.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



type PropsType = {
    title: string
    description: string
    icon?: IconDefinition
}
export const Skill = (props: PropsType) => {
    return (
        <div className={style.skill}>

            <div className={style.icon}>
                <div className={style.iconTransformed}>
                <FontAwesomeIcon icon={faEnvelope} />

                </div>
                </div>
            <div className={style.text} >
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}