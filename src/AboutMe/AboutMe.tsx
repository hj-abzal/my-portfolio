import React from 'react';
import { Title } from '../Common/components/Title/Title';
import style from './AboutMe.module.scss'
type AboutMePropsType = {

}

export const AboutMe: React.FC<AboutMePropsType> = () => {

    return (
        <div className={style.AboutMeBlock}>
            <div className={style.container}>
                <div className={style.smallContainer}>
                    <div className={style.description}>
                        <h3 className={style.title}>About me</h3>
                        <div className={style.descText}>
                            <p> I’m Fidalgo , a 23 years old self-taught Front-end developer , from Portugal .

                            After my college degree in "Communication & Multimedia", I got a job as a "developer", where I stayed for almost 2 years, but I only developed websites with Wordpress custom themes, and HTML & CSS… So I wasn’t learning and improving, I felt stuck.
                            </p>
                        </div>

                    </div>
                    <div className={style.code}>
                        <div className={style.editor}>
                            <div className={style.header}>
                                <p>Editor</p>
                            </div>
                            <div className={style.codeText}></div>
                        </div>
                        <div className={style.result}>
                            <div className={style.resultHeader}>
                                <p className={style.resultHeaderText}>Result</p>
                            </div>
                            <p className={style.resultText}></p>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    )
}