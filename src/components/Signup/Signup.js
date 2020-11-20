import React, {useState} from 'react';
import TextInputSection from '../TextInput/TextInputSection';
import ButtonSection from '../Button/ButtonSection';
import {NavLink} from 'react-router-dom';
import {auth, firestore} from '../../config/firebase';

const Signup =()=> {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(name === 'fullname'){
            setFullname(value);
        }else if(name === 'email'){
            setEmail(value);
        }else if(name === 'password'){
            setPassword(value);
        }
    }


    const handleSubmit = (e) => {
       e.preventDefault;
    
       try {
           if(!fullname || !email || !password){
            setErrorMessage('All Fields are Required');
           }
       } catch (error) {
           
       }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="signup">
                    <NavLink to="/" className="signin-title">TutChit</NavLink>
                        {errorMessage? <p>{errorMessage}</p> : ''}
                    <TextInputSection placeholder="Enter Your Full Name" type="text" label="Full Name" value={fullname} name="fullname" handleChange={handleChange}/>
                    <TextInputSection placeholder="Enter Email Address" type="email" label="Email Address" value={email} name="email" handleChange={handleChange}/>
                    <TextInputSection  placeholder="Enter Your Password" type="password" label="Password" value={password} name="password" handleChange={handleChange}/>
                    <ButtonSection text="Signup" className="buttonSignup blue"/>
                    <p className="center-align">Already have an account? <a href="/login">Signin</a></p>
                </div>
            </form>
        </div>
    )
}

export default Signup
