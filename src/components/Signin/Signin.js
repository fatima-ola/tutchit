import React from 'react';
import TextInputSection from '../TextInput/TextInputSection';
import ButtonSection from '../Button/ButtonSection';
import {NavLink} from 'react-router-dom';


const Signin =()=> {
    return (
        <div className="container">
        <form>
            <div className="signup">
                <NavLink to="/" className="signup-title">TutChit</NavLink>
                <TextInputSection placeholder="Enter Email Address" type="email" label="Email Address"/>
                <TextInputSection  placeholder="Enter Your Password" type="password" label="Password"/>
                <ButtonSection text="Login" className="buttonLogin blue"/>
                <p className="center-align">Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </form>
    </div>
    )
}

export default Signin
