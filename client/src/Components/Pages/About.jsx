import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PageCard from '../PageCard';
import Image from '../Image';
import {Grid} from '@material-ui/core';

const paragraphs = [
    "Every since I can remember, Megan has loved animals. While others would kill a spider upon sight, she would calmly pick it up, place it on a neighboring plant and say, 'Live a long life, spider' with the utmost compassion, care and sincerity.", 
    "She is full of more empathy and energy that most of us combined. If you're looking for someone to love your and care for your animals in your absence, she's your girl.", 
    "From Lake Forest Park."];

const useStyles = makeStyles(theme => ({
    paragraph: {
        marginTop: '1em'
    },
    image: {
        height: '100px', 
        transform: 'rotate(10deg)', 
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
                title='About Me' 
                subheader=" 'They're so cute!' "
            >
                <CardContent>
                    <Grid container>
                        <Grid item xs={4}>
                            <Image 
                                src='images/dog_meg_benji.jpeg' 
                                alt='Picture of Megan with Benji' 
                                className={classes.image}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Image 
                                src='images/dog_boating_rusty.jpg' 
                                alt='Picture of Megan with Rusty' 
                                className={classes.image}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Image 
                                src='images/dog_meg_rusty.jpeg' 
                                alt='Picture of Megan with Rusty' 
                                className={classes.image}
                            />
                        </Grid>
                        <Grid item>
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
                    </Grid>
                </CardContent>
            </ PageCard>
            </Container>
        </Fragment>
    )
}