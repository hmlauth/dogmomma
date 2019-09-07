import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';


export default function Section({className, children}) {
    return (
        <Jumbotron className={className}>
            {children}
        </Jumbotron>
    )
}