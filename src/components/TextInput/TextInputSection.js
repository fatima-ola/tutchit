import React from 'react'
import {TextInput} from 'react-materialize';

const TextInputSection =(props)=> {
    const {placeholder, type, label} = props;
    return (
        <div>
            <label>{label}</label>
            <TextInput placeholder={placeholder}
                type={type}
                inputClassName="browser-default"
                />
        </div>
    )
}



export default TextInputSection