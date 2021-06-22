import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './Skill.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
//@ts-ignore
import Tilt from 'react-tilt'


type PropsType = {
    title: string
    description: string
    icon: IconProp
}

export const Skill = (props: PropsType) => {
    return (
        <Tilt className="Tilt" options={{ max: 25 }} >
            <div className={style.skill}>

                <div className={style.icon}>
                    <FontAwesomeIcon icon={props.icon} size="4x" className={style.iconItself} />
                </div>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </Tilt>

    )
}