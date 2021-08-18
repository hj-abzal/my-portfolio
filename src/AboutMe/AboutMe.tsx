import React from 'react';
import style from './AboutMe.module.scss'
import Typewriter from 'typewriter-effect';
//@ts-ignore
import Fade from 'react-reveal/Fade';

type AboutMePropsType = {

}

export const AboutMe: React.FC<AboutMePropsType> = () => {

    return (
        <div id="AboutMe" className={style.AboutMeBlock}>
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
                            </p>
                            <p> I have a sufficient experience in React development
                                from small pet projects to large architectural and testable web applications.
                            </p>
                            <p>  My most important skills are problem solving,
                                proactivity and total contribution.
                            </p>
                        </div>

                    </div>
                    <Fade right>
                        <div className={style.code}>
                            <div className={style.editor}>
                                <div className={style.header}>
                                    <p>Editor</p>
                                </div>
                                <div className={style.codeText}>
                                    <span>

                                        <i style={{ color: 'aqua' }}>&nbsp; function </i>
                                        <span style={{ color: '#BDF078' }}>myWorkStyle</span>
                                        <span> () {"{ "}</span>
                                    </span>
                                    <span>
                                        <i style={{ color: 'aqua' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let </i>
                                        years =
                                        <span style={{ color: 'purple' }}>1</span>
                                        ;
                                    </span>
                                    <span>
                                        <i style={{ color: 'red' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp; </i>
                                        (
                                        <span style={{ color: 'aqua' }}>&nbsp;let &nbsp;</span>
                                        days =
                                        <span style={{ color: 'purple' }}>&nbsp;0</span>
                                        ; days {"<"}
                                        <span style={{ color: 'purple' }}>&nbsp;365</span>
                                        ; &nbsp;days
                                        <span style={{ color: 'red' }}>++</span>
                                        ) {"  {"}
                                    </span>
                                    <span>
                                        <span>
                                            <i style={{ color: 'aqua' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conslole</i>
                                            <span style={{ color: '#BDF078' }}>.log</span>
                                            <span style={{ color: 'aqua' }}>
                                                (
                                                <span style={{ color: 'gold' }}>"work hard!"</span>
                                                );
                                                <span style={{ color: 'grey' }}> &nbsp; // I am here :)</span>
                                            </span>
                                        </span>
                                    </span>
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"};"}</span>
                                    <span>
                                        <i style={{ color: 'aqua' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conslole</i>
                                        <span style={{ color: '#BDF078' }}>.log</span>
                                        (
                                        <span style={{ color: 'gold' }}>"Ready to consider project work and fulltime employment"</span>
                                        );
                                    </span>
                                    <span>
                                        <span style={{ color: 'red' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return </span>
                                        years
                                        <span style={{ color: 'aqua' }}>++</span>
                                        ;

                                    </span>
                                    <span>&nbsp;{" };"}</span>
                                    <span>
                                        <span style={{ color: '#BDF078' }}>&nbsp;&nbsp;myWorkStyle</span>
                                        ();
                                    </span>
                                </div>
                            </div>
                            <div className={style.result}>
                                <div className={style.resultHeader}>
                                    <p className={style.resultHeaderText}>Result</p>
                                </div>
                                <div className={style.resultText}>
                                    <span style={{ padding: "2px", backgroundColor: "GrayText", borderRadius: "30%" }}>365</span>  <span>Work hard!</span>
                                    <span>
                                        <Typewriter onInit={tw => {
                                            tw
                                                .pauseFor(3000)
                                                .changeDelay(100)
                                                .typeString("Ready to consider project work and fulltime employment")
                                                .deleteAll()
                                                .typeString("Ready to consider project work and fulltime employment")
                                                .deleteAll()
                                                .typeString("Ready to consider project work and fulltime employment")
                                                .start();
                                        }} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Fade>

                </div>




            </div>

        </div>
    )
}

// const TypewriterComponent = () => {
//     return (
//         <>
//             <Typewriter onInit={tw => {
//                 tw
//                     .typeString("Ready to consider project work and fulltime employment")
//                     .start
//             }} />
//         </>
//     )
// }
function myWorkStyle() {
    let years = 1;
    console.log("Ready to consider project work and fulltime employment");
    for (let days = 0; days < 365; days++) (
        console.log("Work hard!")
    )
    return years++;
}
myWorkStyle();