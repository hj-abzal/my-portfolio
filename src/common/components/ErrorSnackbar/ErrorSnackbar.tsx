import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../../Redux/Store';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { setError } from '../../../Redux/portfolioReducer';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export function ErrorSnackbar() {
    const error = useSelector<AppStateType, string | null>(state => state.portfolio.error);
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setError(null));
    }


    const isOpen = error !== null;

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}
