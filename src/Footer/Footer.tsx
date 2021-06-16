import React from 'react';
import style from './Footer.module.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

export const Footer = () => {

    return (
        <div className={style.footer}>
            <h3 className={style.title}>SUAN</h3>
            <div className={style.icons}>
                <a
                    className={style.icon}
                    href="https://www.instagram.com/hj_abzal/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" className={style.iconItself} />
                </a>
                <a
                    className={style.icon}
                    href="https://t.me/SuanAbzal"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'telegram-plane']} size="3x" className={style.iconItself} />
                </a>
                <a
                    className={style.icon}
                    href="https://www.linkedin.com/in/abzal-suan/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="3x" className={style.iconItself} />
                </a>
                <a
                    className={style.icon}
                    href="https://github.com/Hyojeong-Abzal"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'github']} size="3x" className={style.iconItself} />
                </a>
            </div>
            <p className={style.reserved}>© 2021. All rights reserved</p>
        </div>
    )
}