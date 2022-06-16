import React from 'react';
import style from './Hiring.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/Title/Title';

export const Hiring = () => {
    return (
        <div className={style.hiringBlock}>
            <div className={`${styleContainer.container} ${style.hiringContainer}`}>
                <Title title={'Contact Me'}/>
                <div className={style.hiring}>
                    <h3>Considering remote work options</h3>
                    <span className={style.description}>I`m available for work</span>
                    <button>HIRE ME</button>
                </div>
            </div>
        </div>
    );
}
