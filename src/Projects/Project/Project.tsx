import React, {useState} from 'react';
import SuperButton from '../../common/components/c2-SuperButton/SuperButton';
import style from './Project.module.scss';
import Tilt from 'react-tilt'

type PropsType = {
    title: string
    description: string
    style?: { color: string; backgroundImage: string; }
    linkName?: string
}

export const Project = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    return (
        <Tilt className="Tilt" options={{ max: 25 }} >
            <div className={style.project} onMouseEnter={() => setEditMode(true)} onMouseLeave={() => setEditMode(false)}>
                <div style={props.style} className={style.img}>
                    {
                        editMode && <SuperButton>
                            <a href={props.linkName ? props.linkName : ""} target="_blank">
                                View
                            </a>
                        </SuperButton>
                    }

                </div>
                <div className={style.descriptionBlock}>
                    <h3 className={style.title}>{props.title}</h3>
                    <div className={style.description}>{props.description}</div>
                </div>
            </div>
        </Tilt>
    )
}