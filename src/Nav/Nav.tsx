import React from 'react';
import { HeaderDataType } from '../Header/Header';
import style from './Nav.module.css';


type NavPropsType = {
    headerData: HeaderDataType
    isEnglish: boolean
    isLight: boolean
}
export const Nav = (props: NavPropsType) => {
    const theme = props.isLight ? style.aLight : style.aDark;
    return (

        <div className={style.nav}>
            {
                props.isEnglish ? <div className={style.navList}>
                    {props.headerData.inEnglish.map(e => <div > <a className={theme} href="">{e}</a> </div>)}
                </div>
                    :
                    <div className={style.navList} >
                        {props.headerData.inRussian.map(e => <a className={theme} href="">{e}</a>)}

                    </div>
            }

        </div>
    )
}