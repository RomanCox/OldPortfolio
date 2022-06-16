import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.welcome}>
                    <span>Hi There!</span>
                    <h1> I am Roman Cox</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    );
}
