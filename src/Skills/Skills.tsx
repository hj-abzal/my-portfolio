import React from 'react';
import style from './Skills.module.scss';
import { Skill } from './Skill/Skill';
import { Title } from '../Common/components/Title/Title';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);
export const Skills = () => {

    const description = [
        'The correct use of block names with tags to create semantic layout. Using html to create any blocks on the site.',
        'The use of CSS to style the site, also cross-browser layout, semantic layout, Material UI. Using a variety of libraries and animations.',
        'Using JavaScript to write logic. Understanding the structure of the tree virtual DOM. knowledge of the principles of object-oriented programming.',
        'Using the React.js library to write applications. FLUX Cycle, HOC, REST API, react-redux, AJAX, axios. Understanding the component life cycle and asynchronous queries and operations.',
    ];

    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"Skills"} />
                <div className={style.skills}>
                    <Skill
                        icon={['fab', 'html5']}
                        title={'HTML5'}
                        description={description[0]}
                    />
                    <Skill
                        icon={['fab', 'css3']}
                        title={'CSS3'}
                        description={description[1]}
                    />
                    <Skill
                        icon={['fab', 'js-square']}
                        title={'JavaScript'}
                        description={description[2]}
                    />
                    <Skill
                        icon={['fab', 'react']}
                        title={'React'}
                        description={description[3]}
                    />
                </div>
            </div>
        </div>
    )
}