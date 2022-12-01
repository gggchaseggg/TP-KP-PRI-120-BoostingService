import React from "react";
import style from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import PATHS from "../../../data/paths";
import logo from "./logo.png";

const Header = () => {
    return (
        <div className={style.wrapper}>
            <nav className={style.navigation}>
                <ul className={style.navList}>
                    <li className={style.navItem}>
                        <Link to={PATHS.MAIN}>
                            <img src={logo} className={style.navItem} />
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to={PATHS.SERVICES} className={style.colorLink}>Услуги</NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to={PATHS.WARRANTY} className={style.colorLink}>Гарантии</NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to={PATHS.MONITORING} className={style.colorLink}>Мониторинг</NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to={PATHS.COMMAND} className={style.colorLink}>Наша команда</NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to={PATHS.WORK} className={style.colorLink}>Работа</NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to={PATHS.LK} className={style.colorLink}>Войти</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Header;