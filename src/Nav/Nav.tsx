import React from 'react';
import { HeaderDataType } from '../Header/Header';
import style from './Nav.module.css';


type NavPropsType = {
    headerData: HeaderDataType
    isEnglish: boolean
}
export const Nav = (props: NavPropsType) => {
    return (

        <div className={style.nav}>
            {
                props.isEnglish ? <div className={style.navList}>
                    {props.headerData.inEnglish.map(e => <a className={style.a} href="">{e}</a>)}
                </div>
                    :
                    <div className={style.navList} >
                        {props.headerData.inRussian.map(e => <a className={style.a} href="">{e}</a>)}

                    </div>
            }

        </div>
    )
}