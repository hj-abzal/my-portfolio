import React from 'react';
import style from './AboutMe.module.scss';
import Typewriter from 'typewriter-effect';

export const AboutMe = () => {

    const logText = "Ready to consider project work and full-time employment";
    return (
        <div id="AboutMe" className={style.AboutMeBlock}>
            <div className={style.container}>
                <div className={style.smallContainer}>
                    <div className={style.description}>
                        <div className={style.header}>
                            <h3 className={style.title}>About me</h3>
                        </div>
                        <div className={style.descText}>
                            <p>
                                I’m a front-end developer who has a results-focused attitude to creating SPA, using the
                                most popular frameworks like React, Vue, and Angular.
                            </p>
                            <p>
                                I have sufficient experience in Frontend development from small pet projects to large
                                architectural and testable web applications.
                            </p>
                            <p>
                                My most important skills are problem-solving, proactivity, and total contribution.
                            </p>
                        </div>

                    </div>
                    <div className={style.code}>
                        <div className={style.editor}>
                            <div className={style.header}>
                                <p>Editor</p>
                            </div>
                            <div className={style.codeText}>
                                    <span>

                                        <i style={{color: 'aqua'}}>&nbsp; function </i>
                                        <span style={{color: '#BDF078'}}>logInfo</span>
                                        <span> () {"{ "}</span>
                                    </span>
                                <span>
                                        <i style={{
                                            color: 'aqua',
                                            paddingLeft: '30px',
                                        }}>const </i>
                                        personalInfo = {"{ "}
                                    </span>
                                <span>
                                        <span style={{color: 'aqua', paddingLeft: '70px'}}>name:</span>&nbsp;"Abzal"
                                    </span>
                                <span>
                                        <span style={{
                                            color: 'aqua',
                                            paddingLeft: '70px'
                                        }}>country:</span>&nbsp;"Kazakhstan"
                                    </span>
                                <span>
                                        <span style={{
                                            color: 'aqua',
                                            paddingLeft: '70px'
                                        }}>workExperience:</span>&nbsp;"2"
                                    </span>
                                <span>
                                        <span style={{
                                            color: 'aqua',
                                            paddingLeft: '70px'
                                        }}>desiredStack:</span>&nbsp;"MEAN/MERN"
                                    </span>
                                <span style={{paddingLeft: '30px'}}>{"};"}</span>
                                <span>
                                        <i style={{
                                            color: 'red',
                                            paddingLeft: '30px'
                                        }}>for&nbsp; </i>
                                        (
                                        <span style={{color: 'aqua'}}>&nbsp;let &nbsp;</span>
                                        days =
                                        <span style={{color: 'aqua'}}>&nbsp;0</span>
                                        ; days {"<"}
                                    <span style={{color: 'aqua'}}>&nbsp;365</span>
                                        ; &nbsp;days
                                        <span style={{color: 'red'}}>++</span>
                                        ) {"  {"}
                                    </span>
                                <span>
                                        <ConsoleLog word={'Work and enjoy life!'} comment={'//I am here :)'}/>
                                    <div style={{paddingLeft: '30px'}}>{" };"}</div>
                                </span>
                                <span>
                                        <i style={{color: 'aqua', paddingLeft: '30px'}}>console</i>
                                        <span style={{color: '#BDF078'}}>.log</span>
                                        (
                                        <span style={{color: 'gold'}}>"{logText}"</span>
                                        );
                                    </span>
                                <span style={{paddingLeft: '30px'}}> person.<span
                                    style={{color: '#BDF078'}}>workExperienceYear</span> = <span>3</span>;</span>
                                <span>&nbsp;{" };"}</span>
                                <span>
                                        <span style={{color: '#BDF078'}}>&nbsp;&nbsp;logInfo</span>
                                        ();
                                    </span>
                            </div>
                        </div>
                        <div className={style.result}>
                            <div className={style.resultHeader}>
                                <p className={style.resultHeaderText}>Result</p>
                            </div>
                            <div className={style.resultText}>
                                <div className={style.tagWrapper}>
                                    <span className={style.tag}>365</span>&nbsp; Work hard!
                                </div>
                                <span className={style.finalText}>
                                        <Typewriter onInit={tw => {
                                            tw
                                                .pauseFor(3000)
                                                .changeDelay(100)
                                                .typeString(logText)
                                                .deleteAll()
                                                .typeString(logText)
                                                .deleteAll()
                                                .typeString(logText)
                                                .start();
                                        }}/>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function logInfo() {
    for (let days = 0; days < 365; days++) {
        console.log("Work and enjoy life!"); //I am here :)
    }
    console.log("Ready to consider project work and full-time employment");
}

logInfo();

const ConsoleLog = (props: { word: string, comment?: string }) => {
    return <div>
        <i style={{
            color: 'aqua',
            paddingLeft: '40px'
        }}>console</i>
        <span style={{color: '#BDF078'}}>.log</span>
        <span style={{color: 'aqua'}}>
            (
         <span style={{color: 'gold'}}>{props.word}</span>
            );
            <span style={{color: 'grey'}}> &nbsp; {props.comment}</span>
        </span>
    </div>
}