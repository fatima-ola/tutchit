import React from 'react'
import Navigation from '../Navbar/Navigation.js';
import HeroSection from '../HeroSection/HeroSection';
import Feature from './../Feature/Feature';
import Testimonial from './../Testimonial/Testimonial';
import FooterSection from './../Footer/FooterSection';


const Landing =()=> {
    return (
        <div>
            <Navigation/>
            <HeroSection/>
            <div className="who-we-are" id="about">
                <h4 className="center-align">Who we are</h4>
               <div className="who-we-are-section">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit repudiandae blanditiis fuga, eum adipisci earum 
                        numquam veritatis, reiciendis vel autem recusandae molestias deleniti dicta. Dolore totam fugit inventore laborum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit repudiandae blanditiis fuga, eum adipisci earum 
                        numquam veritatis, reiciendis vel autem recusandae molestias deleniti dicta. Dolore totam fugit inventore laborum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit repudiandae blanditiis fuga, eum adipisci earum 
                        numquam veritatis, reiciendis vel autem recusandae molestias deleniti dicta. Dolore totam fugit inventore laborum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit repudiandae blanditiis fuga, eum adipisci earum 
                        numquam veritatis, reiciendis vel autem recusandae molestias deleniti dicta. Dolore totam fugit inventore laborum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit repudiandae blanditiis fuga, eum adipisci earum 
                        numquam veritatis, reiciendis vel autem recusandae molestias deleniti dicta. Dolore totam fugit inventore laborum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit repudiandae blanditiis fuga, eum adipisci earum 
                        numquam veritatis, reiciendis vel autem recusandae molestias deleniti dicta. Dolore totam fugit inventore laborum.
                    </p>
                    <img src="/team.png" alt="team" />
               </div>
            </div>
            <div id="feature">
                <h4 className="center-align">Our Awesome Feature</h4>
                <Feature />
            </div>
            <div id="testimonial">
                <h4 className="center-align">Testimonials</h4>
                <Testimonial />
            </div>
            <div>
                <FooterSection />
            </div>
        </div>
    )
}

export default Landing
