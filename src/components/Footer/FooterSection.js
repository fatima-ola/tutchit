import React from 'react';
import {Footer} from "react-materialize";
import {a} from 'react-router-dom'

const FooterSection =()=> {
    return (
        <Footer
        className="example"
        copyrights="&#169; 2020 TuChit"
        links={<ul>
            <li>
                <a className="grey-text text-lighten-3" href="/">
                    Home
                </a>
            </li>
            <li>
                <a className="grey-text text-lighten-3" href="#about">
                    About
                </a>
            </li>
            <li>
                <a className="grey-text text-lighten-3" href="#testimonial">
                    Testimonial
                </a>
            </li>
            <li>
                <a className="grey-text text-lighten-3" href="#feature">
                    Feature
                </a>
            </li>
            </ul>}
        moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
        >
        <h5 className="white-text">
            Footer Content
        </h5>
        <p className="grey-text text-lighten-4">
            You can use rows and columns here href organize your footer content.
        </p>
    </Footer>
       
    )
}

export default FooterSection
