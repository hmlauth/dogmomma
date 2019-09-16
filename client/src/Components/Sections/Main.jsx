import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Btn from '../Buttons/Btn';

const useStyles = makeStyles(theme => ({ 
    root: {
        backgroundColor: 'white'
    },
    paws: {
        color: '#ff6d6d',
        fontSize: '2.0em'
    },
    itive: {
        color: '#F1DBD5',
        fontSize: '2.0em'
    }
}));


export default function MainSection() {
    const classes = useStyles();

    return (
        <Jumbotron className={classes.root}>
            <Grid container 
            direction="column"
            justify="center"
            alignItems="center">
                <Grid item>
                    <h1>
                        <span className={classes.paws}>PAWS</span>
                        <span className={classes.itive}>ITIVE</span>
                    </h1>
                </Grid>
                <Grid item>
                    <h3 style={{color: 'rgba(0, 0, 0, .85)'}}>
                        We love them like you do.
                    </h3>
                </Grid>
                <Grid item>
                    <Btn>
                        Contact Megan!
                    </Btn>
                </Grid>
            </Grid>
        </Jumbotron>
    )
}