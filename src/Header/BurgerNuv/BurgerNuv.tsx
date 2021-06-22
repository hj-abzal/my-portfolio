import React, { useState } from 'react';
import { HeaderDataType } from '../Header';
import style from './BurgerNuv.module.scss';
import MenuIcon from '@material-ui/icons/Menu';

type NavPropsType = {

}
export const BurgerNav = (props: NavPropsType) => {
    const [editMode, setEditMode] = useState(false)
    return (

        <div className={style.BurgerNuv}>
            <div className={style.BurgerNuvBtn}>
                {
                    editMode && <div className={style.BurgerNuvList} onClick={() => setEditMode(!editMode)}>
                        <a className={style.a} href="#Main">Main</a>
                        <a className={style.a} href="#AboutMe">About me</a>
                        <a className={style.a} href="#Skills">Skills</a>
                        <a className={style.a} href="#Projects">Projects</a>
                    </div>
                }
                <div className={style.Btn} onClick={() => setEditMode(!editMode)}>
                    <MenuIcon />
                </div>
            </div>
        </div>
    )
}