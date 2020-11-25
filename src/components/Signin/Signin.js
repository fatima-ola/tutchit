import React, {useState} from 'react';
import TextInputSection from '../TextInput/TextInputSection';
import ButtonSection from '../Button/ButtonSection';
import {NavLink, useHistory} from 'react-router-dom';
import {auth} from '../../config/firebase'


const Signin =()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    console.log(e.currentTarget.name)
    if(name === "email"){
        setEmail(value);
    }else if(name === "password"){
        setPassword(value);
    }
}

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        if(!email || !password){
           return setErrorMessage('All Fields are Required');
         }
        const {user} = await auth.signInWithEmailAndPassword(email, password);
        localStorage.setItem('uid', user.uid);
        history.push('/dashboard');
       
    } catch (error) {
        if(error.code === 'auth/user-not-found'){
            setErrorMessage('Invalid email address or password');
        }else if(error.code === 'auth/invalid-email'){
            setErrorEmail(error.message)
        }else if(error.code === 'auth/wrong-password'){
            setErrorMessage('Invalid email address or password')
        }
       
        
    }

}

const handleKeyUp = () => {
    setErrorMessage('');
    
}

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="signup">
                <NavLink to="/" className="signup-title">TutChit</NavLink>
                {errorMessage? <p className="center-align red-text" >{errorMessage}</p> : ''}
                <TextInputSection placeholder="Enter Email Address" type="email" label="Email Address" name="email" value={email} handleChange={handleChange} error={errorEmail} handleKeyUp={handleKeyUp}/>
                <TextInputSection  placeholder="Enter Your Password" type="password" label="Password" name="password" value={password} handleChange={handleChange} handleKeyUp={handleKeyUp}   />
                <ButtonSection text="Login" className="buttonLogin blue"/>
                <p className="center-align">Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </form>
    </div>
    )
}

export default Signin
