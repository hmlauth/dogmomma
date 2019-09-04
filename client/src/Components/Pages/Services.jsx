import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import PageCard from '../PageCard';
import { CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';


const services = [
    {
        service: 'Dog Walking', 
        price: '$00.00'
    }, 
    {
        service: 'Special Care', 
        price: '$00.00'
    },
    {
        service: 'Over Nights', 
        price: '$00.00'
    },
    {
        service: 'Transportation', 
        price: '$00.00'
    },
];

const useStyles = makeStyles(theme => ({
    serviceSection: {
        marginBottom: '2em'
    },
    serviceHeading: {
        marginBottom: '2em'
    },
    serviceTitle: {
        width: '50%',
        float: 'left',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    servicePrice: {
        width: '50%',
        float: 'left',
        textAlign: 'right'
    },
    serviceDescription: {
        fontStyle: 'italic'
    },
    serviceInquiries: {
        fontStyle: 'italic',
        textAlign: 'center',
        fontSize: '0.9em'
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
                    {services.map(service => (
                        <div className={classes.serviceSection}>
                            <div className={classes.serviceHeading}>
                                <div className={classes.serviceTitle}>
                                    {service.service}
                                </div>
                                <div className={classes.servicePrice}>
                                    {service.price}
                                </div>
                            </div>
                            <p className={classes.serviceDescription}>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                            </p>
                        </div>
                    ))}
                    <div>
                        <p className={classes.serviceInquiries}>
                            <Link to='/Contact'>
                                Contact Megan for inquiries about additional services.
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </ PageCard>
            </Container>
        </Fragment>
    )
}