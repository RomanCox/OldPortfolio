import React from 'react';
import style from './Main.module.scss';
import hexagon from '../assets/image/hexagons.jpg';
import {Nav} from "../nav/Nav";

export const Main = () => {

    const hexagonBG = {
        backgroundImage: `url(${hexagon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className={style.body}>
            <Nav/>
            <section className={style.mainBlock} style={hexagonBG}>
                <div className={style.container}>
                    <div className={style.center}>
                        {/*<div className={`${styleContainer.container} ${style.mainContainer}`}>*/}
                        <div className={style.textContainer}>
                            <h1>Roman Cox</h1>
                            <h4>{`I'm a `}
                                <span className={style.text}>
                                <span className={style.dropdownText}>developer1</span>
                                <span className={`${style.dropdownText} ${style.hiddenText}`}>freelancer</span>
                            </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
