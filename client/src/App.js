import React, { Fragment } from 'react';
// import NavBar from './Components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
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

const navList = ['About', 'Services', 'Testimonials', 'Contact'];
const icons = [<HomeIcon />, <PetsIcon />, <StarIcon />, <ContactIcon />];

const useStyles = makeStyles({
  list: {
      width: 250
  },
  ListItemIcon: {
      marginLeft: '1em'
  },
  ListItem: {
      '&:hover': {
          color: 'pink',
      },
  },
  link: {
      color: '#2A2711',
      textDecoration: 'none',
  },
  menu: {
      color: '#F8B4B4'
  },
  image: {
      position: 'fixed',
      left: '30px',
      bottom: '0px'
  }
});

const styles = theme => ({
	"@global": {
		body: {
			backgroundImage: "url('/images/dog_dalmation_pink.jpeg')",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
			height: "100%"
		},
		html: {
			height: "100%"
		}
	}
});

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
   
      <List>
        {navList.map((text, i) => (
           <Link to={`/${text}`} className={classes.link}>
                <ListItem button key={text} className={classes.ListItem}>
                    {icons[i]}
                    <ListItemText className={classes.ListItemIcon} primary={text} />
                </ListItem>  
            </Link> 
        ))}
      </List>
    
      <Divider />
      <Image src='images/dog_border_collie.jpeg' alt='border collie' style={classes.image}/>

    </div>
  );

  return (
      <Fragment>
        <CssBaseline />
          <AppBar onClick={toggleDrawer} />
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
      </Fragment>    
  );
}

export default withStyles(styles)(App);

      

