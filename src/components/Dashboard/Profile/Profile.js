import React, {useEffect, useState} from 'react'
import Navigation from '../NavBar/Navigation';
import TextInputSection from '../../TextInput/TextInputSection';
import ButtonSection from '../../Button/ButtonSection';
import { firestore} from '../../../config/firebase';


const Profile = ()=> {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] =useState('');
    const [phone, setPhone] = useState('');

    const uid = localStorage.getItem('uid');

    const handleChange  = (e) => {
    const {name, value} = e.currentTarget;
        if(name === 'fullname'){
            setFullname(value);
        }else if (name === 'email'){
            setEmail(value);
        }else if(name === 'phone'){
            setPhone(value);
        }
    }

    useEffect(() => {
        const fetchedData = async () => {
            const data = await firestore.collection('users').get();
            data.forEach((doc)=>{
            if(doc.id === uid){
                setFullname(doc.data().fullname);
                setEmail(doc.data().email);
        
            }
            })

        }
        fetchedData()
    }, [uid]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = firestore.collection('users').doc(uid);
        user.update({
            fullname,
            email,
            phoneNumber: phone 
        })
    }

    return (
        <div>
            <Navigation />
            <h1 className="center-align">Profile Page</h1>
           <form className="signup" onSubmit={handleSubmit}>
                <TextInputSection type="text" name="fullname" label="Full Name" value={fullname} handleChange={handleChange} placeholder="Enter Full Name"/>
                <TextInputSection type="text" name="email" label="Email Address" value={email} handleChange={handleChange} placeholder="Enter Email Address"/>
                <TextInputSection type="tel" name="phone" label="Phone Number" value={phone} handleChange={handleChange} placeholder="Enter Phone Number"/>
                <ButtonSection text="Update" className="buttonLogin blue" />
           </form>
        </div>
    )
}

export default Profile
