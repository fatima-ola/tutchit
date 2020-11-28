import React, {useState} from 'react'
import Navigation from '../NavBar/Navigation';
import ButtonSection from './../../Button/ButtonSection';
import TextInputSection from './../../TextInput/TextInputSection';
import { firestore} from './../../../config/firebase';



const Home = (props) => {
  const {handleLogout, displayName} = props;
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    if(name === "productName"){
        setProductName(value);
      
    }else if(name === "productValue"){
        setProductValue(value);
    }
  }

  const uid = localStorage.getItem('uid');
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
    const data = firestore.collection('products').add({
        uid,
        productName,
        productValue
    })
       console.log('products added') 
    } catch (error) {
        
    }
  };
    return (
        <div >
            <Navigation  handleLogout={handleLogout} displayName={displayName}/>
            <h1 className="center">Welcome to my dashboard</h1>
            <form className="signup" onSubmit={handleSubmit}>
                <TextInputSection type="text" name="productName" label="Product Name" value={productName} handleChange={handleChange} placeholder="Enter Product Name"/>
                <TextInputSection type="text" name="productValue" label="Product Value" value={productValue} handleChange={handleChange} placeholder="Enter Product Value"/>
                <ButtonSection text="Add" className="buttonLogin blue" />
            </form>
        </div>
    )
}

export default Home
