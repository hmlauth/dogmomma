import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './Components/NavBar';
import MainSection from './Components/Sections/Main';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import {Button} from '@material-ui/core';
import ServicesSection from './Components/Sections/Services';
import Contact from './Components/Sections/Contact';

const styles = theme => ({
    "@global": {
        body: {
        }
    }
});

const useStyles = makeStyles(theme => ({

}));


function App() {
    const classes = useStyles();

  return (
      <Fragment>
        <CssBaseline />
       
      </Fragment>    
  );
}


export default withStyles(styles)(App);      

