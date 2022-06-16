import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Project} from './project/Project';
import {Title} from '../common/components/Title/Title';
import todoListImage from '../assets/image/todolist.png';
import socialImage from '../assets/image/social.png';

export const Projects = () => {

    const todoList = {
        backgroundImage: `url(${todoListImage})`,
    };

    const social = {
        backgroundImage: `url(${socialImage})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={style.projects}>
                    <Project
                        style={todoList}
                        title={'TodoList'}
                        description={'sd gflksa gflkg kjsanfkjsndfklmlk kjasndkjsafdl kamslkd'}
                    />
                    <Project
                        style={social}
                        title={'Social Network'}
                        description={'salkdnmgf oian gfkjag'}
                    />
                </div>
            </div>
        </div>
    );
}
