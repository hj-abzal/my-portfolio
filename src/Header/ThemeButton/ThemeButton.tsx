import React from 'react';
import s from './ThemeButton.module.css'
import { Button, ButtonGroup, createStyles, Grid, Switch, Typography, withStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';



type ThemeButtonPropsType = {
    isLight: boolean
    onClick: (theme: boolean) => void
}
export const ThemeButton = React.memo((props: ThemeButtonPropsType) => {

    const themeStyle = props.isLight ? s.light : s.dark
    //
    const AntSwitch = withStyles((theme: Theme) =>
        createStyles({
            root: {
                width: 28,
                height: 16,
                padding: 0,
                display: 'flex',
            },
            switchBase: {
                padding: 2,
                color: theme.palette.grey[500],
                '&$checked': {
                    transform: 'translateX(12px)',
                    color: theme.palette.common.white,
                    '& + $track': {
                        opacity: 1,
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.primary.main,
                    },
                },
            },
            thumb: {
                width: 12,
                height: 12,
                boxShadow: 'none',
            },
            track: {
                border: `1px solid ${theme.palette.grey[500]}`,
                borderRadius: 16 / 2,
                opacity: 1,
                backgroundColor: theme.palette.common.white,
            },
            checked: {},
        }),
    )(Switch);


    return (
        <div className={s.wrapper}>
            <Switch
                checked={props.isLight}
                onChange={e => props.onClick(e.target.checked)}
            />
        </div>
    )
})