import React, {useState} from 'react';
import TextInputSection from '../TextInput/TextInputSection';
import ButtonSection from '../Button/ButtonSection';
import {NavLink} from 'react-router-dom';
import {auth, firestore} from '../../config/firebase';

const Signup =()=> {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
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


    const handleSubmit = async(e) => {
       e.preventDefault();
    
       try {
           if(!fullname || !email || !password){
            setErrorMessage('All Fields are Required');
           }
           const {user} = await auth.createUserWithEmailAndPassword(email, password)
           if(user){
               const profile = firestore.collection('users').doc(user.uid)
                await profile.set({
                  fullname,
                  email  
                })
            }    
       } catch (error) {
        // setErrorMessage(error.message);
        if(error.code === 'auth/weak-password'){
            setErrorPassword(error.message)
        }else if(error.code === 'auth/email-already-in-use'){
            setErrorEmail(error.message)
        }else if(error.code === 'auth/invalid-email'){
            setErrorEmail(error.message)
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
                    <NavLink to="/" className="signin-title">TutChit</NavLink>
                        {errorMessage? <p className="center-align red-text" >{errorMessage}</p> : ''}
                    <TextInputSection placeholder="Enter Your Full Name" type="text" label="Full Name" value={fullname} name="fullname" handleChange={handleChange} handleKeyUp={handleKeyUp} />
                    <TextInputSection placeholder="Enter Email Address" type="email" label="Email Address" value={email} name="email" handleChange={handleChange} handleKeyUp={handleKeyUp} error={errorEmail}/>
                    <TextInputSection  placeholder="Enter Your Password" type="password" label="Password" value={password} name="password" handleChange={handleChange} handleKeyUp={handleKeyUp} error={errorPassword}/>
                    <ButtonSection text="Signup" className="buttonSignup blue"/>
                    <p className="center-align">Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>
        </div>
    )
}

export default Signup
