import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ContactIcon from '@material-ui/icons/SupervisedUserCircle';
import PetsIcon from '@material-ui/icons/Pets';
import StarIcon from '@material-ui/icons/StarBorderRounded';
import HomeIcon from '@material-ui/icons/HomeRounded';

// Icons for all cards regarless of page
const icons = [<HomeIcon />, <PetsIcon />, <StarIcon />, <ContactIcon />, <ShareIcon />];

// Styles for all cards regardless of page
const useStyles = makeStyles(theme => ({
   root: {
       backgroundColor: '#F1DBD5',
       width: '100%',
       marginTop: '2em',
       opacity: '0.95',
       boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
       overflow: 'hidden'
   },
    header: {
        textAlign: 'center'
    },
    actions: {
        justifyContent: 'center'
    }
}));

export default function PageCard(props) {
    const classes = useStyles();
    const { title, subheader, children} = props;
    return (
        <Fragment>
            <Container fluid>
                <Card className={classes.root}>
                    <CardHeader 
                        className={classes.header} 
                        title={title} 
                        subheader={subheader}
                    />

                    {children}

                    <CardActions className={classes.actions} disableSpacing>
                        {icons.map(icon => {
                            return (
                            <IconButton aria-label='icon'>
                                {icon}
                            </IconButton>
                            )
                        })}
                    </CardActions>
                </Card>
            </Container>
        </Fragment>
    )
}
