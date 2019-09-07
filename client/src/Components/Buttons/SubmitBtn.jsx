import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    '&:focus': {
        outline: 'none'
    }
  },
  input: {
    display: 'none',
  },
}));

export default function SubmitBtn({children}) {
    const classes = useStyles();
    
    return (
        <Fragment>
            <Button variant="contained" className={classes.button}>
                {children}
            </Button>
        </Fragment>
    )
}