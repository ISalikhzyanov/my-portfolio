import React from 'react';
import '../assets/scss/pages/contacts.scss'
import YandexMap from '../components/YandexMap'
import mail from '../assets/img/mail.svg'
import phone from '../assets/img/phone.svg'
import location from '../assets/img/location.svg'
import ContactForm from "../components/ContactForm";

function Contacts() {
    return (
        <div className="contacts">
            <div className="page-header">
                <div className="container">
                    <h2>Контактная информация</h2>
                </div>
            </div>
            <div className="contacts__ya-map">
                <YandexMap />
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="contacts__contacts">
                        <img src={phone} width="70" height="70" alt="no"/>
                        <div className="contacts__description">
                            <a className="contacts__description__header" href="https://t.me/isalikhzyanov" target="_blank">Telegram</a>
                            <span>Fahradit klasický smysluplný text vhodnou bezvýznamovo</span>
                        </div>
                    </div>
                    <div className="contacts__contacts">
                        <img src={location} width="70" height="70" alt="no"/>
                        <div className="contacts__description">
                            <span className="contacts__description__header">Россия, Казань</span>
                            <span>Fahradit klasický smysluplný text vhodnou bezvýznamovo</span>
                        </div>
                    </div>
                    <div className="contacts__contacts">
                        <img src={mail} width="70" height="70" alt="no"/>
                        <div className="contacts__description">
                            <span className="contacts__description__header">eazy581998@gmail.com</span>
                            <span>Fahradit klasický smysluplný text vhodnou bezvýznamovo</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 form">
                    <span className="contacts__form__header">Напишите мне на эл. почту</span>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contacts;
