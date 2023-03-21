import React from 'react';
import '../assets/scss/components/footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__main">
                    <div className="footer__socials">
                        <a className="footer__link" href="https://vk.com/whoyougonnahatenow" target="_blank">Vk</a>
                        <a className="footer__link" href="https://instagram.com/whoyougonnahatenow?igshid=YmMyMTA2M2Y=" target="_blank">Instagram</a>
                        <a className="footer__link" href="https://t.me/isalikhzyanov" target="_blank">Telegram</a>
                    </div>
                    <div className="footer__copyrighting">
                        © 2023 ISalikhzyanov
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
