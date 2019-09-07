import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'react-bootstrap/Navbar';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#2d2e2a',
        // boxShadow: '2px -2px 10px 4px #777',
        position: 'fixed',
        top: '0px',
        width: '100%',
        height: '8em',
        justifyContent: 'center',
        marginBottom: '2em',
        zIndex: '1'
    },
    paws: {
        color: '#ff6d6d'
    },
    itive: {
        color: '#F1DBD5'
    }
});

export default function Nav() {
    const classes = useStyles();

    return (
        <Navbar expand="lg" className={classes.navbar}>
            <h1>
                <span className={classes.paws}>PAWS</span>
                <span className={classes.itive}>ITIVE</span>
            </h1>
        </Navbar>
    )
   
}