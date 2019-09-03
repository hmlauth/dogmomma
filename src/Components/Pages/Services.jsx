import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import PageCard from '../PageCard';
import { CardContent } from '@material-ui/core';

const services = ['Dog Walking', 'Sleep Overs', 'Special Care', 'Transportation'];

const useStyles = makeStyles(theme => ({
    services: {
        margin: '1em'
    }
}));

export default function Services() {
    const classes = useStyles();
    
    return (
        <Fragment>
            <Container fluid>
            <PageCard 
                title='Services' 
                subheader=""
            >
                <CardContent>
                    <ul>
                        {services.map(service => (
                            <li>{service}</li>
                        ))}
                    </ul>
                </CardContent>
            </ PageCard>
            </Container>
        </Fragment>
    )
}