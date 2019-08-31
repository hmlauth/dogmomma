import React from 'react';

export default function Image (props) {
    console.log(props);
    return (
        <div className={props.style}>
            <img src={props.src} alt={props.alt}></img>
        </div>
    )
};
