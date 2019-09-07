import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'typeface-roboto';
import App from './App';

ReactDOM.render(
    <Router>
        <App />
        {/* <Switch> */}
            {/* <Route exact path="/About" component={About} /> */}
            {/* <Route path="/Services" component={Services} /> */}
            {/* <Route path="/Testimonials" component={Testimonials} /> */}
            {/* <Route path="/Contact" component={Contact} /> */}
            {/* <Route component={Notfound} /> */}
        {/* </Switch> */}
  </Router>, 
  document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
