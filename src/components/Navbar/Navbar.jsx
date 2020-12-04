import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Профиль</NavLink>
            </div>
            <div className={s.item}>
                {/*<a href="">Cj,otzby</a>*/}
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/events' activeClassName={s.activeLink}>События</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Настройки</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/yandexdzen' activeClassName={s.activeLink}>Наш Дзен</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;