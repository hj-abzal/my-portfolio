import React from 'react';
import {Nav} from './Nav/Nav';
import style from './Header.module.scss';
import angularLogoLarge from '../assets/images/angular-logo-large.png'

type HeaderPropsType = {}

export type HeaderDataType = {}
export const Header = (props: HeaderPropsType) => {
    let parts = Array.from({length: 50})

    return (
        <div className={style.header}>
            <div className={style.content}>

                <div className={style.logo}>
                    <img className={style.appLogo}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
                    <span>   <a className={style.title} href="https://reactjs.org/" target="_blank">React</a>  </span>
                </div>
                <div className={style.nav}>
                    <Nav/>
                </div>

                <div className={style.modes} onClick={() => window.open("https://angular.io", "_blank")}>
                    <div className={style.modesInner}>
                        <img src={angularLogoLarge} alt=""/>
                        <div className={style.fire}>
                            {parts.map((el, i) => <div key={i} className={style.fireParticle}></div>)}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}