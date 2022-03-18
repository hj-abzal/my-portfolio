import React from 'react';
import style from './Skills.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/Title/Title';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';


library.add(fas);
export const Skills = () => {

    const description = {
        frontend: 'React(redux), Angular(Ngrx)',
        foundation: 'JavaScript, TypeScript, HTML5, CSS3, Git',
        testing: 'Unit Tests, SnapShot, Storybook',
        ui: 'Material UI, Ant-Design etc, Angular Material',
        backend: 'Node.js, Express, NestJS, Docker',
        database: 'Postgresql, MongoDB'
    };

    return (
        <div id="Skills" className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"Skills"}/>
                <div className={style.skills}>

                    <Skill
                        icon={['fas', 'laptop-code']}
                        title={'FRONTEND'}
                        description={description.frontend}
                    />

                    <Skill
                        icon={['fas', 'code']}
                        title={'FOUNDATION'}
                        description={description.foundation}
                    />

                    <Skill
                        icon={['fas', 'clipboard-list']}
                        title={'TESTING'}
                        description={description.testing}
                    />

                    <Skill
                        icon={['fab', 'sketch']}
                        title={'DESIGN'}
                        description={description.ui}
                    />
                    <Skill
                        icon={['fas', 'server']}
                        title={'BACKEND'}
                        description={description.backend}
                    />
                    <Skill
                        icon={['fas', 'database']}
                        title={'DATABASE'}
                        description={description.database}
                    />
                </div>
            </div>
        </div>
    )
}