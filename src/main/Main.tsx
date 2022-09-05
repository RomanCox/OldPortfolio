import React from 'react';
import style from './Main.module.scss';
import matrix from '../assets/image/mini_matrix.jpg';
import {Nav} from '../nav/Nav';
import {TypingText} from '../hooks/TypingText/TypingText';
import videoWebm from '../assets/video/Rain_Code.webm';

export const Main = () => {

    const matrixBG = {
        backgroundImage: `url(${matrix})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const phrases = ['', 'developer', 'freelancer', 'tour agent :)']

    return (
        <div className={style.body}>
            <Nav/>
            <section className={style.mainBlock}>
                <div className={style.container}>
                    <div className={style.imgCover} style={matrixBG}></div>
                    <video preload='auto' autoPlay muted loop className={style.video}>
                        <source type='video/webm' src={videoWebm} />
                    </video>
                    <div className={style.center}>
                        <div className={style.textContainer}>
                            <h1 className={style.selection}>Roman Cox</h1>
                            <h4>{`I'm a`}
                                <TypingText phrases={phrases} />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
