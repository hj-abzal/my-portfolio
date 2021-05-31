import { Switch } from '@material-ui/core';
import React from 'react';
import s from './LangSwitcher.module.css'


type LangSwitcherPropsType = {
    inEnglish: boolean
    changeLang: () => void
}
export const LangSwitcher = React.memo((props: LangSwitcherPropsType) => {
    return (
        <div>
            <Switch
                color="primary"
                style={{ color: "rgb(97, 218, 251)" }}
                checked={props.inEnglish}
                onClick={props.changeLang}
            />
        </div>
    )
})

