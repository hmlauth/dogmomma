import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PageCard from '../PageCard';
import Image from '../Image';
import {Grid} from '@material-ui/core';

const paragraphs = [
    "Since the beginning, Megan has loved all animals. While others would kill a spider upon sight, she would calmly pick it up, place it on a neighboring plant and say, 'Live a long life!' with the utmost compassion, care and sincerity.", 
    "Megan grew up with cats, dogs, birds and chickens.",
    "She is full of more empathy and energy that most of us combined. If you're looking for someone to love and care for your animals with the same intensity that you do, she's your girl!", 
    "Megan was born and raised in Lake Forest Park where she currently resides."];

const useStyles = makeStyles(theme => ({
    paragraph: {
        marginTop: '1em'
    },
    imgItem: {
        textAlign: 'center'
    },
    image: {
        height: '200px', 
        borderRadius: '25px', 
        border: '1px solid grey'
    }
}));

export default function Testimonials() {
    const classes = useStyles();
    
    return (
        <Fragment>
            <Container fluid>
            <PageCard 
                title='About Megan' 
                subheader=' "Live a long life!" '
            >
                <CardContent>
                    <Grid container >
                        <Grid item sm={12} className={classes.imgItem}>
                            <Image 
                                src='images/dog_meg_rusty2.jpg' 
                                alt='Picture of Megan with Rusty' 
                                className={classes.image}
                            />
                        </Grid>
                        <Grid item sm={0} md={1} />
                        <Grid item sm={12} md={10}>
                            {paragraphs.map(paragraph => (
                                    <Typography 
                                        variant="body2" 
                                        color="textSecondary" 
                                        component='p'
                                        className={classes.paragraph}>
                                            {paragraph}
                                    </Typography>
                            ))}  
                        </Grid> 
                        <Grid item sm={0} md={1} />
                    </Grid>
                </CardContent>
            </ PageCard>
            </Container>
        </Fragment>
    )
}