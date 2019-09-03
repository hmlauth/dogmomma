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
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleTextChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedH: true,
      });
    
      const handleCheckboxChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

    return (
        <Fragment>
            <Container fluid>
                <PageCard 
                    title='Contact' 
                    subheader="Expect a response within 24 - 48 hours!"
                >
                    <CardContent>
                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                         <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
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
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleCheckboxChange('checkedA')}
                                    value="checkedA"
                                />
                            }
                            label="Dog Walking"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleCheckboxChange('checkedB')}
                                    value="checkedB"
                                />
                            }
                            label="Sleep Over"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleCheckboxChange('checkedC')}
                                    value="checkedC"
                                />
                            }
                            label="Transportation"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    icon={<FavoriteBorder />} 
                                    checkedIcon={<Favorite />} 
                                    value="checkedH" 
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
                                shrink: true,
                            }}
                        />
                    </CardContent>
                </ PageCard>
            </Container>
        </Fragment>
    )
}