import React from 'react';
import style from './Footer.module.scss';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Fade from 'react-reveal/Fade';

library.add(fab);

export const Footer = () => {

    return (
        <div className={style.footer}>
            <Fade bottom>
                <h3 className={style.title}>SUAN</h3>
                <div className={style.icons}>
                    <a
                        className={style.icon}
                        href="https://www.instagram.com/hj_abzal/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" className={style.iconItself} />
                    </a>
                    <a
                        className={style.icon}
                        href="https://t.me/SuanAbzal"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={['fab', 'telegram-plane']} size="3x" className={style.iconItself} />
                    </a>
                    <a
                        className={style.icon}
                        href="https://www.linkedin.com/in/abzal-suan/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="3x" className={style.iconItself}/>
                    </a>
                    <a
                        className={style.icon}
                        rel="noreferrer"
                        href="https://github.com/hj-abzal"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={['fab', 'github']} size="3x" className={style.iconItself}/>
                    </a>
                </div>
                <p className={style.reserved}>© {new Date().getFullYear()}. All rights reserved</p>
            </Fade>
        </div>
    )
}
