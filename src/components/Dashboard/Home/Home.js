import React, {useState, useEffect} from 'react'
import Navigation from '../NavBar/Navigation';
import ButtonSection from './../../Button/ButtonSection';
import TextInputSection from './../../TextInput/TextInputSection';
import { firestore} from './../../../config/firebase';
import {useHistory} from 'react-router-dom';





const Home = (props) => {
  const {handleLogout, displayName} = props;
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');
  const history = useHistory();

  const uid = localStorage.getItem('uid');

    useEffect(()=>{
        if(!uid){
            history.push('/')
        }
    }, []);


  const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    if(name === "productName"){
        setProductName(value);
      
    }else if(name === "productValue"){
        setProductValue(value);
    }
  }

 
  const handleAdd = (e) => {
    e.preventDefault();
    try {
    const data = firestore.collection('products').add({
        uid,
        productName,
        productValue
    })
    } catch (error) {
        
    }
  };


  const handleDelete = (e) => {
    e.preventDefault();
  }

    return (
        <div >
            <Navigation  handleLogout={handleLogout} displayName={displayName}/>
            <h1 className="center">Welcome to my dashboard</h1>
            <form className="signup" >
                <TextInputSection type="text" name="productName" label="Product Name" value={productName} handleChange={handleChange} placeholder="Enter Product Name"/>
                <TextInputSection type="text" name="productValue" label="Product Value" value={productValue} handleChange={handleChange} placeholder="Enter Product Value"/>
                <ButtonSection text="Add" handleClick={handleAdd} className="buttonLogin blue" />
                <ButtonSection text="Delete" handleClick={handleDelete} className="buttonLogin red" />
            </form>
        </div>
    )
}

export default Home
