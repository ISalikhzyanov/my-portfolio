import React from 'react';
import '../assets/scss/components/header.scss'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="container header">
            <div className="header__logo">
                <div className="header__logo__icon">
                    <span className="header__logo__text">IS</span>
                </div>
                <div className="header__logo__header">
                    Ilham <span className="header__logo__header">Salikhzyanov</span>
                </div>
            </div>
            <div className="header__links">
                <Link className="header__logo__link" to="/">Главная</Link>
                <Link className="header__logo__link" to="/frontend-skills">Frontend Skills</Link>
                <Link className="header__logo__link" to="/portfolio">Портфолио</Link>
                <Link className="header__logo__link" to="/contacts">Контакты</Link>

            </div>
        </div>
    );
}

export default Header;
