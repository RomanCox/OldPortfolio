import React from 'react';
import style from './Nav.module.scss';

export const Nav = () => {
    return (
        <nav className={style.header}>
            <a>
                <img></img>
            </a>
            <div className={style.navContainer}>
                <ul className={style.navbar}>
                    <li className={style.navbarItem}>
                    <a href='' className={style.navLink}>Main</a>
                    </li>
                    <li className={style.navbarItem}>
                    <a href='' className={style.navLink}>Skillz</a>
                    </li>
                    <li className={style.navbarItem}>
                    <a href='' className={style.navLink}>Projects</a>
                    </li>
                    <li className={style.navbarItem}>
                    <a href='' className={style.navLink}>Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
