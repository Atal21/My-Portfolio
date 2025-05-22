import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Lalit</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/lalit-atal-773281174/" className="footer__social-link" target='_blank'>
                        <i class="uil uil-linkedin"></i>
                    </a>
                    {/* <a href="https://www.google.com/" className="home__social-icon" target='_blank'>
         <i class="uil uil-dribbble"></i>
    </a> */}
                    <a href="https://github.com/Atal21" className="footer__social-link" target='_blank'>
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved
</span>




            </div>
        </footer>
    )
}

export default Footer