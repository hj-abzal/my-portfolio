import React from 'react';
import SuperButton from '../Common/components/c2-SuperButton/SuperButton';
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
                        <div className={style.header}>
                            <h3 className={style.title}>About me</h3>
                        </div>
                        <div className={style.descText}>
                            <p> I’m a front-end developer who has a
                                results-focused attitude to creating SPA,
                                using React(JS/TS), Redux.

                                I would like to find project work and fulltime employment in a company with a
                                modern approach to development and
                                a collaborative team.

                                My free time is dedicated to Codewars,
                                programming tutorials, and becoming
                                familiar with NodeJS, because, in the
                                future, I see myself as a Full Stack
                                Developer.
                                Ready to consider project work and fulltime employment </p>
                        </div>

                    </div>
                    <div className={style.code}>
                        <div className={style.editor}>
                            <div className={style.header}>
                                <p>Editor</p>
                                <SuperButton className={style.button}>Run</SuperButton>
                            </div>
                            <div className={style.codeText}>
                                <p>
                                    function myWorkStyle () (
                                    let years = 1;
                                    console.log("Ready to consider project work and fulltime employment");
                                    for (let days = 0; days "меньше" "365"; days++) (
                                    console.log("Work hard!")
                                    )
                                    return years++;
                                    )
                                    myWorkStyle();
                                </p>
                            </div>
                        </div>
                        <div className={style.result}>
                            <div className={style.resultHeader}>
                                <p className={style.resultHeaderText}>Result</p>
                            </div>
                            <p className={style.resultText}>
                                Ready to consider project work and fulltime employment
                                Work hard! 365
                            </p>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    )
}


function myWorkStyle() {
    let years = 1;
    console.log("Ready to consider project work and fulltime employment");
    for (let days = 0; days < 365; days++) (
        console.log("Work hard!")
    )
    return years++;
}
myWorkStyle();