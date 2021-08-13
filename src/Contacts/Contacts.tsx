import React from 'react';
import { FormEvent } from 'react';
import SuperButton from '../Common/components/c2-SuperButton/SuperButton';
import { Title } from '../Common/components/Title/Title';
import style from './Contacts.module.scss';
import emailjs from 'emailjs-com';
import { setError } from '../Redux/portfolioReducer';
import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
export const Contacts = () => {
    const [validation, setValidation] = useState(false)
    function sendEmail(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();
        emailjs.sendForm('service_gv6v9ua', 'template_cvjdw9g', e.currentTarget, 'user_sHJSGniXOG0Y452xqfX7K')
            .then((result) => {
                setValidation(true)
            }, (error) => {
                setError(error.text);
            });
        e.currentTarget.reset();
    }

    return (
        <div id="Contacts" className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'Contacts'} />
                <form className={style.form} method={'post'} onSubmit={sendEmail}>
                    <div className={style.inputContainer}>
                        <input
                            className={style.inputElement1}
                            type={'text'}
                            name={'name'}
                            placeholder={'Name'}
                        />
                        <input
                            className={style.inputElement2}
                            type={'text'}
                            name={'email'}
                            placeholder={'Email'}
                        />
                    </div>
                    <textarea
                        className={style.textarea}
                        placeholder={'Message'}
                        name={'message'}
                    />
                    {validation && <IconButton>
                        <DoneAllIcon />
                    </IconButton>
                    }
                    <SuperButton type={'submit'} >
                        Send message
                    </SuperButton>
                </form>

            </div>
        </div>
    )
}