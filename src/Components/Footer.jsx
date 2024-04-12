import React from 'react'
import "../Styles/Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h1 className="footer__title">ROAD MAP OF WHY</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>


                    <li>
                        <a href="#portfolio" className="footer__link">Training</a>
                    </li>


                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>



                <div className="footer__social">
                    <a href="https://www.facebook.com/profile.php?id=100085447813061&mibextid=ZbWKwL" className="footer__social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>



                    <a href="https://instagram.com/toju_toby?igshid=ZGUzMzM3NWJiOQ==" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>


                    <a href="" className="footer__social-link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>


                        <span className="footer__copy">&#169; ROAD MAP OF WHY All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;