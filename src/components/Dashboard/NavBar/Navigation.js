import React from 'react';
import 'materialize-css';
import { Navbar, Icon} from 'react-materialize';
import {NavLink} from 'react-router-dom'

const Navigation =(props) =>{
    const {handleLogout, displayName} = props
    return (
        <div>
           
            <Navbar 
            alignLinks="right"
            brand={<a className="brand-logo black-text" href="/">TutChit</a>}
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
            className="white z-depth-0"
            >
            <NavLink to="/" className="black-text" style={{backgroundColor: "transparent"}}>
                Welcome {displayName}
            </NavLink>
            <NavLink to="/products" className="black-text" style={{backgroundColor: "transparent"}}>
               Products
            </NavLink>
            <NavLink to="/profile" className="black-text" style={{backgroundColor: "transparent"}}>
               Profile
            </NavLink>
            <NavLink onClick={handleLogout} to="/" className="black-text">
                Logout
            </NavLink>
            </Navbar>
        </div>
    )
}

export default Navigation