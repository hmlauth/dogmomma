import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
    '&:focus': {
      outline: 'none'
    }
  },
  custom: {
    backgroundColor: '#F8B4B4',
    color: 'black',
    justifyContent: 'space-between',
    '&:hover': {
        color: 'black',
        textDecoration: 'none'
    }
  },
}));

export default function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.custom}>
          <IconButton onClick={props.onClick('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon className={classes.menuButton}/>
          </IconButton>
          <Typography variant="h6" color="inherit">
            <Link to='/' className={classes.custom}>
                Meg-a-Paw
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}