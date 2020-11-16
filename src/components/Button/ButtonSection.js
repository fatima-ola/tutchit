import React from 'react'
import {Button} from 'react-materialize'

const ButtonSection =(props)=> {
    const {text, handleClick, className} = props
    return (
        <div>
            <Button
                node="button"
                waves="light"
                onClick={handleClick}
                className={className}
            >
               {text}
            </Button>
        </div>
    )
}

export default ButtonSection
