import React from 'react';
import style from './Skills.module.scss';
import { Skill } from './Skill/Skill';
import { Title } from '../Common/components/Title/Title';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';



library.add(fas);
export const Skills = () => {

    const description = [
        'React, Redux Toolkit, RestAPI',
        'JavaScript, TypeScript, HTML5, CSS3',
        'Unit Tests, SnapShot, Storybook',
        'Material UI, Ant-Design etc',
        'Node.js, Express, MongoDB'
    ];

    return (
        <div id="Skills" className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"Skills"} />
                <div className={style.skills}>

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
                    <Skill
                        icon={['fas', 'server']}
                        title={'BACKEND'}
                        description={description[4]}
                    />
                </div>
            </div>
        </div>
    )
}