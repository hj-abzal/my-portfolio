import React, {useState} from 'react';
import SuperButton from '../common/components/c2-SuperButton/SuperButton';
import {Title} from '../common/components/Title/Title';
import style from './Contacts.module.scss';
import emailjs from 'emailjs-com';
import {useFormik} from "formik";

export const Contacts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.name) {
                return {
                    name: 'Name is required'
                }
            }

        },
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: (values, {resetForm}) => {
            const message = `message: ${values.name}, ${values.email}, ${values.message}`
            setIsLoading(true)
            emailjs.send(
                'service_yd59m0d',
                'template_cvjdw9g',
                {message},
                'user_sHJSGniXOG0Y452xqfX7K')
                .then((result) => {
                    resetForm({
                        values: {
                            name: `Dear ${values.name}`, email: 'from heart', message: 'thank you!♥'
                        }
                    })
                }, (error) => {
                }).finally(() => setIsLoading(false));
        },
    });
    const error = formik.errors.name || formik.errors.email || formik.errors.message


    return (
        <div id="Contacts" className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'Contacts'}/>
                <form className={style.form} onSubmit={formik.handleSubmit}>
                    <div className={style.inputContainer}>
                        <input
                            className={style.inputElement1}
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder={'Name'}
                        />
                        <input
                            className={style.inputElement2}
                            name="email"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder={'Email'}
                        />
                    </div>
                    <textarea
                        className={style.textarea}
                        name="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        placeholder={'Message'}
                    />
                    <SuperButton type={'submit'} disabled={!!error || isLoading}>
                        {error ? error : isLoading ? "sending..." : 'Send message'}
                    </SuperButton>
                </form>

            </div>
        </div>
    )
}