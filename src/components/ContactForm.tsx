import React from 'react';
import '../assets/scss/pages/contacts.scss'

function ContactForm() {
    return (
        <div className="contacts__form">
            <div className="contacts__form__wrapper">
                    <div className="contacts__form__left">
                        <input
                            className="contacts__form__input"
                            placeholder="Фамилия и почта"
                        />
                        <input
                            className="contacts__form__input"
                            placeholder="Email"
                        />
                    </div>
                    <div className="contacts__form__right">
                        <textarea
                            className="contacts__form__textarea"
                            placeholder="Введите текс сообщения"
                        />
                    </div>
            </div>
            <button className="contacts__form__btn">
                Отправить
            </button>
        </div>
    );
}

export default ContactForm;
