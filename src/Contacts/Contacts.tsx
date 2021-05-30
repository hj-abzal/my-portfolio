import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../Redux/Store';
import style from './Contacts.module.css';

export const Contacts = () => {
    const isLight = useSelector<AppStateType, boolean>( state => state.portfolio.isLight)
    const inEnglish = useSelector<AppStateType, boolean>( state => state.portfolio.inEnglish)
  
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <h3 className={style.title}>Contact</h3>
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