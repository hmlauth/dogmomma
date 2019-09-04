
import React, { Component, Fragment } from 'react';
import PageCard from '../PageCard';
import { CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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
import Grid from '@material-ui/core/Grid';

export default class Contact extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            name: '',
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
    return (
        <Fragment>
            
                <PageCard 
                    title='Contact' 
                    subheader="Expect a response within 24 - 48 hours!"
                >
                    <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                required={true}
                                id="outlined-required"
                                label="Name"
                                margin='normal'
                                variant='outlined'
                                // className={this.classes.textField}
                                onChange={this.handleTextChange('name')}
                                value={this.state.name}
                            />
                        </Grid> 
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="outlined-email-input"
                                label="Email"
                                // className={this.classes.textField}
                                type="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleTextChange('email')}
                                value={this.state.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                            <Grid item xs={12} >
                                <div onClick={this.handleSubmit}>
                                    <SubmitBtn>
                                        Submit
                                    </SubmitBtn>
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </ PageCard>
            
        </Fragment>
    )
    }
}