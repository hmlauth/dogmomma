import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'react-bootstrap/Navbar';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#000000de',
        position: 'sticky',
        top: '0px',
        width: '100%',
        height: '5em',
        justifyContent: 'center',
        zIndex: '1'
    },

});

export default function Nav() {
    const classes = useStyles();

    return (
        <Navbar expand="lg" className={classes.navbar} >
            <div class='container'>
            
            </div>
        </Navbar>
    )
   
}