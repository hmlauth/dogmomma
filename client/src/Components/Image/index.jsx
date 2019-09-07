import React from 'react';

export default function Image (props) {
    return (
        <div className={props.style}>
            <img src={props.src} alt={props.alt} className={props.className} />
        </div>
    )
};
