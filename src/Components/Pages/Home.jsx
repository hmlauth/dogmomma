import React, { Fragment } from 'react';
import HeartIcon from '@material-ui/icons/Favorite';
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
	"@global": {
		body: {
			backgroundImage: "url('/images/dog_dalmation_pink.jpeg')",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
			// width: "100%"
		},
		html: {
			height: "100%"
		}
	}
});


function Home() {
    return (
        <Fragment>
            <CssBaseline />
            {/* <h1>DOG <HeartIcon /> MOMMA</h1> */}
            {/* <Image src='images/dog_peek-a-boo.jpeg' alt='peek a boo dog' style={classes.image}/> */}
        </Fragment>
    )
}

export default withStyles(styles)(Home);