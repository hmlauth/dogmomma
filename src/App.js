import React, { Fragment } from 'react';
import NavBar from './Components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
	"@global": {
		body: {
			backgroundImage: "url('/images/dog_dalmation_pink.jpeg')",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
			height: "100%"
		},
		html: {
			height: "100%"
		}
	}
});

function App() {
  return (
      <Fragment>
        <CssBaseline />
          <NavBar />
      </Fragment>    
  );
}
export default withStyles(styles)(App);


