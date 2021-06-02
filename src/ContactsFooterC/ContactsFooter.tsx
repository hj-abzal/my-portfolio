import React from 'react';
import { Footer } from '../Footer/Footer';
import { Contacts } from './Contacts/Contacts';
import style from './ContactsFooter.module.scss'

export const ContactsFooter: React.FC<any> = () => {
    return <div  className={style.contactsFooterBlock}>
        <Contacts />
        <Footer />
    </div>
}