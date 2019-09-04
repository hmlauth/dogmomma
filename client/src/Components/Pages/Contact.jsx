
import React, { Fragment } from 'react';
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
import { checkServerIdentity } from 'tls';

// const GreenCheckbox = withStyles({
//     root: {
//       color: 'light grey',
//       '&$checked': {
//         color: 'black',
//       },
//     },
//     checked: {},
//   })(props => <Checkbox color="default" {...props} />);
  
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

export default function Contact() {

    const classes = useStyles();

    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''    
    });

    const [state, setState] = React.useState({
        dogWalking: false,
        overNight: false,
        transportation: false,
        specialCare: false,
      });

    const handleTextChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleCheckboxChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('I was clicked!');
        // console.log(state, values);
        const { firstName, lastName, email, message } = values;
        const currentState = state;
        console.log(currentState)

        let checkedServices = [];
        for (var item in currentState) {
            console.log(currentState[item])
            if (currentState[item]) {
                checkedServices.push(item)
            }
        }
        console.log(checkedServices);
        const formSubmission = {
            firstName, 
            lastName, 
            email, 
            message,
            checkedServices,
        }
        console.log(formSubmission);

        const form = await axios.post('/api/contact', formSubmission);
        
    }

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
                            required
                            id="outlined-required"
                            label="First Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={handleTextChange('firstName')}
                        />
                         <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={handleTextChange('lastName')}
                        />
                        <TextField
                            required
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            onChange={handleTextChange('email')}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleCheckboxChange('dogWalking')}
                                    value="dogWalking"
                                />
                            }
                            label="Dog Walking"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleCheckboxChange('overNight')}
                                    value="overNight"
                                />
                            }
                            label="Over Night"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleCheckboxChange('transportation')}
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
                            id="outlined-full-width"
                            label="Anything else I should know?"
                            style={{ margin: 8 }}
                            placeholder=""
                            helperText=""
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={handleTextChange('message')}
                        />
                        </form>
                        <div onClick={handleSubmit}>
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