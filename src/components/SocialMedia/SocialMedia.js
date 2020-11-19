import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faTwitter, faInstagram, faMedium, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SocialMedia=()=> {
    return (
        <div>
           <a href="https://github.com/fatima-ola" className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://web.facebook.com/olasunkanmi.fatima" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/fatima_ola1" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/learnbuildteach" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://medium.com/@fatima-ola/" className="medium social">
                <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/fatima-olasunkanmi-ojo" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
        </div>
    )
}

export default SocialMedia
