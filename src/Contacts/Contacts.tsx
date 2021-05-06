import React from 'react';
import style from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <h3 className={style.title}>Contact</h3>
                <div className={style.form}>
                    <form  >
                        <p>
                            <input type="text" name="name" value="Имя автора" />
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