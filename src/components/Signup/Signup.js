import React from 'react';
import TextInputSection from '../TextInput/TextInputSection';
import ButtonSection from '../Button/ButtonSection';
import {NavLink} from 'react-router-dom';

const Signup =()=> {
    return (
        <div>
            <form>
                <div>
                    <NavLink to="/">TutChit</NavLink>
                    <TextInputSection placeholder="Enter Your Full Name" type="text" label="Full Name"/>
                    <TextInputSection placeholder="Enter Email Address" type="email" label="Email Address"/>
                    <TextInputSection  placeholder="Placeholder" type="password" label="Password"/>
                    <ButtonSection>Signup</ButtonSection>
                </div>
            </form>
        </div>
    )
}

export default Signup
