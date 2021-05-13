import React from 'react';
import s from './ThemeButton.module.css'
type ThemeButtonPropsType = {
    isLight: boolean
    changeTheme: () => void
}
export const ThemeButton = React.memo((props: ThemeButtonPropsType) => {

    const themeStyle = props.isLight ? s.light : s.dark
    return (
        <div className={s.wrapper}>
            <div onClick={props.changeTheme} className={themeStyle}></div>
        </div>
    )
})