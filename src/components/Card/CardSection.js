import React from 'react';
import {CardPanel} from 'react-materialize'

const CardSection = ({children})=> {
    return (
        <CardPanel className="z-depth-1 hoverable">
            <span className="white-text">
                {children}
            </span>
        </CardPanel>
    )
}

export default CardSection
