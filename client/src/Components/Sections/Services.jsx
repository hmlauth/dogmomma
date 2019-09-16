import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import services from '../../utils/services';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({ 
    root: {
        backgroundColor: '#ff6d6d',
        flexGrow: 1
    },
    card: {
        width: 345,
        // height: 400
      },
    media: {
    height: 200,
    },
    actions: {
        justifyContent: 'space-between'
    }
}));


export default function ServicesSection() {
    const classes = useStyles();

    return (
        <Jumbotron className={classes.root}>
            <Grid container 
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            >
                    {services.map(service => (
                        <Grid item >
                            <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={service.src}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                              <Grid container>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6">
                                            {service.title}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {service.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.actions}>
                          <Button size="small" color="primary">
                            Share
                          </Button>
                          <Typography variant="body2" color="textSecondary" component="p">
                              {service.price}
                            </Typography>
                        </CardActions>
                      </Card>
                      </Grid>   
                    ))}
                 
            </Grid>
        </Jumbotron>
    )
}