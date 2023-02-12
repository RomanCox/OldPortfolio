import React, {useEffect, useState} from 'react';
import style from './Main2.module.scss';
import {Nav} from '../nav/Nav';
import {TypingText} from '../hooks/TypingText/TypingText';
import {Canvas} from '../common/components/Background/Canvas';

export const Main2 = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setTimeout(setIsShow, 2500, true)
    }, [])

    const phrases = ['', 'front-end developer', 'web developer', 'freelancer']

    return (
            <div className={style.body}>
                <Nav/>
                <Canvas color={'green'} />
                {isShow
                    ?   <section className={style.mainBlock}>
                            <div className={style.container}>
                                <div className={style.center}>
                                    <div className={style.textContainer}>
                                        <h1 className={style.selection}>Roman Cox</h1>
                                        <h4>{`I'm a`}
                                            <div className={style.typingTextContainer}>
                                                <TypingText phrases={phrases}/>
                                            </div>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </section>
                    : null
                }
            </div>

    )
}
