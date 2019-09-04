
import React, { Component, Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import PageCard from '../PageCard';
import { CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import SubmitBtn from '../SubmitBtn';
import axios from 'axios';
import MyTextField from '../TextField';
console.log(MyTextField);

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));

export default class Contact extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            dogWalking: false,
            overNight: false,
            transportation: false,
            specialCare: false,
            emailValid: true,
            validationError: ''
        }
    }

    classes = useStyles => useStyles();

    handleTextChange = name => event => {
        const { value } = event.target;
        this.setState({[name]: value})
    };

    handleCheckboxChange = name => event => {
        this.setState({[name]: event.target.checked } );
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const isEmailValid = await this.validateEmail(this.state.email);

        if (isEmailValid) {

            this.setState({
                validationError: '', 
                emailValid: true
            });

            const { firstName, lastName, email, message } = this.state;
        
            let services = [];
            for (var item in this.state) {
                if (
                    (item === 'dogWalking' && this.state[item]) || 
                    (item === 'overNight' && this.state[item]) || 
                    (item === 'transportation' && this.state[item]) || 
                    (item === 'specialCare' && this.state[item])
                    ) {
                    services.push(item)
                } 
            }
            const formSubmission = {
                firstName, 
                lastName, 
                email, 
                message,
                services,
            }
            console.log(formSubmission);
    
            const form = await axios.post('/api/contact', formSubmission);
        } else {
            this.setState({
                validationError: 'Please enter a valid email.', 
                emailValid: false
            })
        }   
    }

    validateEmail = email => {
        console.log('....validation', email);
        return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    }

render() {
    console.log(this.state)
    return (
        <Fragment>
            <Container fluid>
                <PageCard 
                    title='Contact' 
                    subheader="Expect a response within 24 - 48 hours!"
                >
                    <CardContent>
                        <form method="post">
                        <TextField
                            required={true}
                            id="outlined-required"
                            label="First Name"
                            margin='normal'
                            variant='outlined'
                            className={this.classes.textField}
                            onChange={this.handleTextChange('firstName')}
                            value={this.state.firstName}
                        />
                         <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            className={this.classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleTextChange('lastName')}
                            value={this.state.lastName}
                        />
                        <TextField
                            required
                            id="outlined-email-input"
                            label="Email"
                            className={this.classes.textField}
                            type="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleTextChange('email')}
                            value={this.state.email}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={this.handleCheckboxChange('dogWalking')}
                                    value="dogWalking"
                                />
                            }
                            label="Dog Walking"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={this.handleCheckboxChange('overNight')}
                                    value="overNight"
                                />
                            }
                            label="Over Night"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={this.handleCheckboxChange('transportation')}
                                    value="transportation"
                                />
                            }
                            label="Transportation"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    icon={<FavoriteBorder />} 
                                    checkedIcon={<Favorite />} 
                                    value="specialCare" 
                                />
                            }
                            label="Special Care"
                        />
                        <TextField
                            required
                            id="outlined-full-width"
                            label="Anything else I should know?"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{shrink: true}}
                            onChange={this.handleTextChange('message')}
                            value={this.state.message}
                        />
                        </form>
                        <div onClick={this.handleSubmit}>
                            <SubmitBtn>
                                Submit
                            </SubmitBtn>
                        </div>
                    </CardContent>
                </ PageCard>
            </Container>
        </Fragment>
    )
    }
}