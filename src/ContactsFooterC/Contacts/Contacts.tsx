import React from 'react';
import { useSelector } from 'react-redux';
import { Title } from '../../Common/components/Title/Title';
import { AppStateType } from '../../Redux/Store';
import style from './Contacts.module.scss';

export const Contacts = () => {
    const isLight = useSelector<AppStateType, boolean>(state => state.portfolio.isLight)
    const inEnglish = useSelector<AppStateType, boolean>(state => state.portfolio.inEnglish)

    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'Contacts'} />
                <form className={style.contactForm}  >
                    <input type="text" />
                    <input type="text" />
                    <textarea />
                    <button type="submit" className={style.submitBtn}>Отправить</button>
                </form>

            </div>
        </div>
    )
}