import React from 'react'
import Navigation from '../NavBar/Navigation';


const Home = (props) => {
  const {handleLogout, displayName} = props;
    return (
        <div>
            <Navigation  handleLogout={handleLogout} displayName={displayName}/>
            <h1>Welcome to my dashboard</h1>
        </div>
    )
}

export default Home
