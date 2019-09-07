import React, { Fragment } from 'react';
// import NavBar from './Components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ContactIcon from '@material-ui/icons/SupervisedUserCircle';
import PetsIcon from '@material-ui/icons/Pets';
import StarIcon from '@material-ui/icons/StarBorderRounded';
import HomeIcon from '@material-ui/icons/HomeRounded';
import Image from './Components/Image';
import AppBar from './Components/AppBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const navList = ['About', 'Services', 'Testimonials', 'Contact'];
const icons = [<HomeIcon />, <PetsIcon />, <StarIcon />, <ContactIcon />];

const useStyles = makeStyles({
  
});

// const styles = theme => ({
// 	"@global": {
// 		body: {
// 			backgroundImage: "url('/images/dog_dalmation_pink.jpeg')",
// 			backgroundRepeat: "no-repeat",
// 			backgroundPosition: "center center",
// 			backgroundSize: "cover",
// 			backgroundAttachment: "fixed",
// 			height: "100%"
// 		},
// 		html: {
// 			height: "100%"
// 		}
// 	}
// });

export default function App() {
  const classes = useStyles();
  
  return (
      <Fragment>
        <CssBaseline />
        <Navbar expand="lg" variant="light" bg="light" >
            <Container>
                <Navbar.Brand href="#">Pawsitive</Navbar.Brand>
            </Container>
        </Navbar>
        <Jumbotron>
            <h1>Welcome!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Book Now!</Button>
            </p>
        </Jumbotron>
        <Jumbotron>
            <p>
                (blurb)
            </p>
            <p>
            </p>
        </Jumbotron>
        <Jumbotron>
            <h1>Services</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
            </p>
        </Jumbotron>
        <Jumbotron>
            <h1>My Furry Friends</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
            </p>
        </Jumbotron>
        <Jumbotron>
            <h1>What Pet Owners Say</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
            </p>
        </Jumbotron>
        <Jumbotron>
            <h1>About Megan</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
            </p>
        </Jumbotron>
        <Jumbotron>
            <h1>Contact</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
            </p>
        </Jumbotron>
      </Fragment>    
  );
}


      

