import React from 'react'
import {Button} from 'react-materialize'

const ButtonSection =({children})=> {
    return (
        <div>
            <Button
                node="button"
                waves="light"
            >
               {children}
            </Button>
        </div>
    )
}

export default ButtonSection
