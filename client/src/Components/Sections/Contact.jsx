
import React, { Component, Fragment } from 'react';
import { CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Btn from '../Buttons/Btn';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import services from '../../utils/services';

export default class ContactForm extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            name: '',
            email: '',
            message: '',
            dogWalking: false,
            houseSitting: false,
            overNight: false,
            specialCare: false,
            allAnimals: false,
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
                    (item === 'allAnimals' && this.state[item]) || 
                    (item === 'specialCare' && this.state[item]) ||
                    (item === 'houseSitting' && this.state[item])
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
        <Jumbotron style={{backgroundColor: '#000000de'}}>
           
           

        </Jumbotron>
        )
    }
}