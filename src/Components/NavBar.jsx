import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PetsIcon from '@material-ui/icons/Pets';
import StarIcon from '@material-ui/icons/StarBorderRounded';
import HomeIcon from '@material-ui/icons/HomeRounded';
import Image from './Image';

const navList = ['About', 'Services', 'Testimonials', 'Contact'];
const icons = [<HomeIcon />, <PetsIcon />, <StarIcon />, <SupervisedUserCircleIcon />];

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
        position: 'relative',
        left: '30px',
        bottom: '-325px'
    }
});


export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (side, open) => event => {
    //   console.log(event.type);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <BrowserRouter>
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
    </BrowserRouter>
  );


  return (
    <div>
      <Button onClick={toggleDrawer('left', true)} className={classes.menu}>Menu</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

