import React, {useEffect, useState} from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Home/Home';
import Profile from './components/Dashboard/Profile/Profile';
import {auth, firestore} from './config/firebase';


const App = () => {
  const [user, setUser] = useState('');


useEffect(()=>{
  auth.onAuthStateChanged( async (userData)=> {
    if (userData) {
      const profile = await firestore.collection('users').doc(userData.uid).get();
      if(profile.exists){
        setUser(profile.data().fullname);
      }
    }else{
     setUser('');
    }
});
},  [])



const handleLogout = ()=>{
  auth.signOut();
  localStorage.removeItem('uid');
      
}


  return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/dashboard">
            <Dashboard  handleLogout={handleLogout} displayName={user}/>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
  
  );

}
export default App;

