import React from 'react'
import {TextInput} from 'react-materialize';

const TextInputSection =(props)=> {
    const {placeholder, type, label, handleChange, name, value, handleKeyUp} = props;
    return (
        <div>
            <label>{label}</label>
            <TextInput placeholder={placeholder}
                type={type}
                inputClassName="browser-default"
                name={name}
                value={value}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
            />
        </div>
    )
}



export default TextInputSection