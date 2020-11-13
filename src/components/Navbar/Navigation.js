import React from 'react';
import 'materialize-css';
import { Navbar, Icon} from 'react-materialize';
import {NavLink} from 'react-router-dom'

const Navigation =() =>{
    return (
        <div>
           
            <Navbar 
            alignLinks="right"
            brand={<a className="brand-logo" href="/">Logo</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
              draggable: true,
              edge: 'left',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
              preventScrolling: true
            }}
            >
            <NavLink to="/">
                Home
            </NavLink>
            <a href="#about">
                About
            </a>
            <a href="#feature">
                Feature
            </a>
            <a href="testimonial">
                Testimonial
            </a>
            <NavLink to="/login">
                Login
            </NavLink>
            <NavLink to="/signup">
                Signup
            </NavLink>
            </Navbar>
        </div>
    )
}

export default Navigation