import React from 'react';
import { useSelector } from 'react-redux';
import SuperButton from '../../Common/components/c2-SuperButton/SuperButton';
import { Title } from '../../Common/components/Title/Title';
import { AppStateType } from '../../Redux/Store';
import style from './Contacts.module.scss';

export const Contacts = () => {


    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'Contacts'} />
                <form className={style.contactForm}  >
                    <input className={style.inputStyle} type="text" />
                    <input className={style.inputStyle} type="text" />
                    <textarea />
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <SuperButton type={"submit"} className={style.submitBtn}> Отправить </SuperButton>
                    </div>
                </form>

            </div>
        </div>
    )
}