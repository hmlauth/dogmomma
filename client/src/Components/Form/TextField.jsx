import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function MyTextField({id, label, className, onChange, value, name}) {
    return (
        <TextField
            required
            id={id}
            label={label}
            className={className}
            margin="normal"
            variant="outlined"
            onChange={onChange(name)}
            value={value}
            name={name}
        />
    )
}
