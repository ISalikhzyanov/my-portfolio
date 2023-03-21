import React from 'react';
import homePageImg from '../assets/img/home-page-img.png'
import {Link} from "react-router-dom";
import '../assets/scss/pages/homePage.scss'

function HomePage() {
    return (
        <div className="row">
            <div className="col-lg-6">
                <img
                    src={homePageImg}
                    alt="no"
                    className="home__img"
                />
            </div>
            <div className="col-lg-6 d-flex align-items-center">
                <div>
                    <div className="home__description-header">Frontend Developer</div>
                    <div className="home__description-name">Ильхам Салихзянов</div>
                    <div className="home__description">Potřebujete vytvořit webové stránky ? Při tvorbě webových stránek zajišťuji celkový design od
                        návrhu až po realizaci. Perfektní technickou stránku zajistišťuji též, aby všechno běželo přesně jak
                        má. Kdyby by Vás mé portofilo přípradně zkušenosti zaujaly - napište mi !
                    </div>
                    <div className="home__description-links">
                        <Link className="home__description-link" to="/portfolio">Портфолио</Link>
                        <Link className="home__description-link" to="/contacts">Контакты</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
