import React from 'react';
import style from './Title.module.css';

type TitlePropsType = {
    text: string
}
export const Title = (props: TitlePropsType) => {


    return (

        <div className={style.title}>
            <h2 >{props.text}</h2>
        </div>

    )
}