import React from 'react';
import { FormEvent } from 'react';
import SuperButton from '../Common/components/c2-SuperButton/SuperButton';
import { Title } from '../Common/components/Title/Title';
import style from './Contacts.module.scss';

export const Contacts = () => {

    function sendEmail(e: FormEvent<HTMLFormElement>) {


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

                    <SuperButton >
                        Send message
                    </SuperButton>
                    {/* <button className={style.contactsButton} type={'submit'}>
                        Say Hello!
                    </button> */}
                </form>

            </div>
        </div>
    )
}