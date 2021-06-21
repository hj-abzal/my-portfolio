import React from 'react';
import style from './Skills.module.scss';
import { Skill } from './Skill/Skill';
import { Title } from '../Common/components/Title/Title';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
//@ts-ignore
import Fade from 'react-reveal/Fade';

library.add(fas);
export const Skills = () => {

    const description = [
        'React, Redux, Middlewere etc',
        'JavaScript, TypeScript, HTML5, CSS3',
        'Unit Tests, SnapShot, Storybook',
        'Material UI, Ant-Design etc',
    ];

    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"Skills"} />
                <div className={style.skills}>
                    <Fade left>
                        <Skill
                            icon={['fas', 'laptop-code']}
                            title={'DEVELOPMENT'}
                            description={description[0]}
                        />
                        <Skill
                            icon={['fas', 'code']}
                            title={'FOUNDATION'}
                            description={description[1]}
                        />
                    </Fade>

                    <Fade right>
                        <Skill
                            icon={['fas', 'clipboard-list']}
                            title={'TESTING'}
                            description={description[2]}
                        />
                        <Skill
                            icon={['fab', 'sketch']}
                            title={'DESIGN'}
                            description={description[3]}
                        />
                    </Fade>
                </div>
            </div>
        </div>
    )
}