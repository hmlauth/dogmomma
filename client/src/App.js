import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './Components/NavBar';
import Section from './Components/Jumbotron';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

const styles = theme => (
    '@global': {
        color: 'white'
)
}

const useStyles = makeStyles({
    welcome: {
        marginTop: '8em',
        textAlign: 'center',
        paddingTop: '0',
        height: '500px',
        backgroundColor: '#42413d'
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
    quoteBox: {
        fontStyle: 'italic',
        borderStyle: 'dotted',
        borderColor: '#2d2e2a',
        borderWidth: '3pt 0pt 3pt 0pt',
        width: '100%',
        position: 'absolute',
        right: '0'
    },
    quote: {
        fontSize: '1.2em',
        padding: '2em',
        margin: '0',
    },
    services: {
        backgroundColor: '#F1DBD5'
    }
});

function App() {
  const classes = useStyles();

  return (
      <Fragment>
        <CssBaseline />
        <Nav />
        <Section className={classes.welcome}>
            <ul className={classes.homeRibbon}>
                {['Home','Services','Reviews','About'].map(section => (
                    <li className={classes.homeRibbonItem}>
                        <img src='images/tag_clipart.png' className={classes.petTag} />
                        <p>{section}</p>
                    </li>
                ))}
            </ul>
            <div className={classes.quoteBox}>
                <p className={classes.quote}>"Everyone thinks they have the best pet. And none of them are wrong."</p>
            </div>
        </Section>
        <Section className={classes.services}>

        </Section>
      </Fragment>    
  );
}


export default withStyles(styles)(App);      

