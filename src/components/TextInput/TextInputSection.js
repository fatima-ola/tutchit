import React from 'react'
import {TextInput} from 'react-materialize';

const TextInputSection =(props)=> {
    const {placeholder, type, label, handleChange, name, value, handleKeyUp, error} = props;
    return (
        <div>
            <label>{label}</label>
            <TextInput 
                placeholder={placeholder}
                type={type}
                inputClassName="browser-default"
                name={name}
                value={value}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
            />
            <p className="red-text">{error}</p>
        </div>
    )
}



export default TextInputSection