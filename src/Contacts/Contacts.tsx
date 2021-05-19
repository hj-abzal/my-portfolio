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
                <div className={style.form}>
                    <form  >
                        <p>
                            <input className={style.input} type="text" name="name" value="Имя автора" />
                            <label >Имя</label>
                        </p>
                        <p>
                            <input type="text" name="email" value="name@example.com" />
                            <label  >E-Mail</label>
                        </p>
                        <p>
                            <textarea name="msg"></textarea>
                        </p>

                    </form>
                </div>
                <p >
                    <input type="submit" value="Отправить" />
                </p>

            </div>
        </div>
    )
}