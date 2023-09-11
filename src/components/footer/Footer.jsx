import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                    Created with ❤️ by <a href="https://github.com/maaizameer" target="_blank">Maaiz Ameer</a>.
                </div>
                <div className="socialIcons">
                    <a href="https://facebook.com/maaizameer" target="_blank"><span className="icon">
                        <FaFacebookF />
                    </span></a>
                    <a href="https://instagram.com/maaizameer" target="_blank"><span className="icon">
                        <FaInstagram />
                    </span></a>
                    <a href="https://twitter.com/maaizameer" target="_blank"><span className="icon">
                        <FaTwitter />
                    </span></a>
                    <a href="https://linkedin.com/in/maaizameer" target="_blank"><span className="icon">
                        <FaLinkedin />
                    </span></a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
