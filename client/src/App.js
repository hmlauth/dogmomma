import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './Components/NavBar';
import Section from './Components/Jumbotron';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import {Button} from '@material-ui/core';

const styles = theme => ({
    "@global": {
        body: {
            color: 'black'
        }
    }
});

const useStyles = makeStyles(theme => ({
    welcome1: {
        margin: '8em 0 0 0',
        textAlign: 'center',
        paddingTop: '0',
        // backgroundColor: '#42413d',
        borderRadius: '0'
    },
    welcome2: {
        // backgroundColor: '#42413d',
        padding: '4em',
        borderRadius: '0',
        margin: '0'
        // backgroundImage: 'linear-gradient(#42413d, #F8B4B4 99%)'
    },
    welcome3: {
        // backgroundColor: '#42413d',
        padding: '4em',
        borderRadius: '0',
        // backgroundImage: 'linear-gradient(#F8B4B4, #fd8e2f 99%)',
        margin: '0px'
    },
    homeRibbon: {
        listStyle: 'none',
        padding: '0px',
        margin: '0px',
        top: '-14px',
        position: 'relative'
    },
    homeRibbonItem: {
        display: 'inline-block',
        margin: '1.2em'
    },
    petTag: {
        maxWidth: '10em',
        height: 'auto'
    },
    quote: {
        fontSize: '1.2em',
        // padding: '2em',
        margin: '0',
    },
    welcome2Grid: {
        justifyContent: 'center'
    },
    imgGrid: {
        textAlign: 'center'
    },
    mainImg: {
        maxWidth: '20em',
        height: 'auto',
        borderRadius: '50%',
        boxShadow: '2px -2px 10px 4px #777',

    },
    services: {
        backgroundColor: '#F1DBD5'
    },
    paws: {
        color: '#ff6d6d'
    },
    itive: {
        color: '#F8B4B4'
    },
    quoteBracket: {
        fontSize: '2em'
    },
    closeQuoteBracket: {
        textAlign: 'right'
    },
    buttonGrid: {
        margin: theme.spacing(1),
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#fe9135'
    }
}));

function App() {
    const classes = useStyles();

  return (
      <Fragment>
        <CssBaseline />
        <Nav />
        <Section className={classes.welcome1}>
            <ul className={classes.homeRibbon}>
                {['Home','Services','Reviews','About'].map(section => (
                    <li className={classes.homeRibbonItem}>
                        <img src='images/tag_clipart.png' className={classes.petTag} alt='dig tag'/>
                        <p>{section}</p>
                    </li>
                ))}
            </ul>
        </Section>
        <Section className={classes.welcome2}>
        <Grid container spacing={2} className={classes.welcome2Grid}>
            <Grid item sm={5} className={classes.quoteBox}>
                <h3><span className={classes.quoteBracket}>"</span></h3>
                <h3 className={classes.quote}>
                    <span className={classes.paws}>
                        Everyone
                    </span> thinks they have the <span className={classes.itive}>
                        best pet
                    </span>. . . 
                </h3>
                <h3 className={classes.closeQuoteBracket}>
                    and <span className={classes.paws}>
                        all
                    </span> of them are <span className={classes.itive}>
                        right
                    </span>!
                </h3> 
                <br />
                <h3 className={classes.closeQuoteBracket}><span className={classes.quoteBracket}>"</span></h3>
                
            </Grid>
            <Grid item sm={7} className={classes.imgGrid}>
            <img src='images/dog_boating_rusty.jpg' alt='dog' className={classes.mainImg} />
            </Grid>
        </Grid>
        <Grid container className={classes.buttonGrid}>
            <Button variant="contained" color="primary" className={classes.button}>
                Contact Megan now!
            </Button>
        </Grid>
        </Section>
        <Section className={classes.welcome3}>

        </Section>
      </Fragment>    
  );
}


export default withStyles(styles)(App);      

