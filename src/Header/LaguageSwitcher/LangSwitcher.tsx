import React from 'react';
import s from './LangSwitcher.module.css'


type LangSwitcherPropsType = {
    inEnglish: boolean
    changeLang: () => void
}
export const LangSwitcher = React.memo((props: LangSwitcherPropsType) => {
    return (
        <div>
            <input type="checkbox" onClick={props.changeLang} />
        </div>
    )
})

