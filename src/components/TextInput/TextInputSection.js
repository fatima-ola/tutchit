import React from 'react'
import {TextInput} from 'react-materialize';

const TextInputSection =()=> {
    return (
        <div>
            <label>First Name</label>
            <TextInput placeholder="Enter Your First Name"
                type="text"
                />
        </div>
    )
}



export default TextInputSection