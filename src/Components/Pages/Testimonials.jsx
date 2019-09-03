import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import PageCard from '../PageCard';
import { CardContent } from '@material-ui/core';

const testimonials = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
];

const useStyles = makeStyles(theme => ({
    testimonials: {
        marginTop: '2em'
    }
}));

export default function Testimonials() {
    const classes = useStyles();
    
    return (
        <Fragment>
            <Container fluid>
            <PageCard 
                title='Testimonials' 
                subheader=""
            >
                <CardContent>
                    {testimonials.map(testimonial => (
                        <div className={classes.testimonials}>
                            <img src='https://via.placeholder.com/50' alt='placeholder img'/>
                            <p>{testimonial}</p>
                        </div>
                    ))}
                </CardContent>
            </ PageCard>
            </Container>
        </Fragment>
    )
}