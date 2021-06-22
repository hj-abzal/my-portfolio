import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from './Nav/Nav';
import { ChangeAppLanguageAC, ChangeAppThemeAC } from '../Redux/portfolioReducer';
import style from './Header.module.scss';
import { AppStateType } from '../Redux/Store';
import { BurgerNav } from './BurgerNuv/BurgerNuv';


type HeaderPropsType = {

}

export type HeaderDataType = {

}
export const Header = (props: HeaderPropsType) => {
    return (
        <div className={style.header}>
            <div className={style.content}>

                <div className={style.logo}>
                    <img className={style.appLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
                    <span>   <a className={style.title} href="https://reactjs.org/" target="_blank">React</a>  </span>
                </div>
                <div className={style.nav}>
                    <Nav />
                    <div >
                        <BurgerNav />
                    </div>

                </div>
                <div className={style.modes}>
                    <span>  <a href="https://github.com/Hyojeong-Abzal" target="_blank">GitHub</a>  </span>
                </div>

            </div>
        </div>
    )
}