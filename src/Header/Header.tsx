import React from 'react';
import {Nav} from './Nav/Nav';
import style from './Header.module.scss';
import angularLogoLarge from '../assets/images/angular-logo-large.png'
import angularLogoSmall from '../assets/images/angular-icon-logo.png'
import rocket from '../assets/images/rocket.png'

export const Header = () => {
    let parts = Array.from({length: 50})

    return (
        <div className={style.header}>
            <div className={style.content}>

                <div className={style.logo}>
                    <img alt={'logo'} className={style.appLogo}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
                    <span>   <a className={style.title} href="https://reactjs.org/" rel="noreferrer"
                                target="_blank">React</a>  </span>
                </div>
                <div className={style.nav}>
                    <Nav/>
                </div>

                <div className={style.modes} onClick={() => window.open("https://angular.io", "_blank")}>
                    <div className={style.modesInner}>
                        <img src={angularLogoLarge} className={style.angularLogoLarge} alt=""/>
                        <img src={angularLogoSmall} className={style.angularLogo} alt=""/>
                        <img src={rocket} className={style.rocket} alt=""/>
                        <div className={style.fire}>
                            {parts.map((el, i) => <div key={i} className={style.fireParticle}></div>)}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}