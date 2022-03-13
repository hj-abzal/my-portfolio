import React from 'react';
import style from './Nav.module.css';


type NavPropsType = {

}
export const Nav = (props: NavPropsType) => {
    return (

        <div className={style.nav}>
            <a className={style.a} href="#Main">Main</a>
            <a className={style.a} href="#AboutMe">About me</a>
            <a className={style.a} href="#Skills">Skills</a>
            <a className={style.a} href="#Projects">Projects</a>
            <a className={style.a} href="#Contacts">Contacts</a>
        </div>
    )
}