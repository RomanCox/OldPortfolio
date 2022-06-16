import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import hexagon from '../assets/image/hexagons.jpg';

export const Main = () => {

    const hexagonBG = {
        backgroundImage: `url(${hexagon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section className={style.mainBlock} style={hexagonBG}>
            <div className={style.container}>
                <div className={style.center}>
                    {/*<div className={`${styleContainer.container} ${style.mainContainer}`}>*/}
                    <div className={style.textContainer}>
                        <h1>Roman Cox</h1>
                        <h4>I'm a
                            <span className={style.text}>
                                <span className={style.hiddenText}>developer</span>
                                <span className={style.hiddenText}>freelancer</span>
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
