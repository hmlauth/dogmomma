import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'typeface-roboto';
import App from './App';
import About from './Components/Pages/About';
// import Services from './Components/Pages/Services';
// import Testimonials from './Components/Pages/Testimonials';
// import Contact from './Components/Pages/Contact';
// import NotFound from './Components/Pages/NotFound';

const routing = (
    <Router>
      <div>

        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
        <Switch>
            <Route path="/" component={App} />
            {/* <Route path="/About" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/Testimonials" component={Testimonials} />
            <Route path="/Contact" component={Contact} />
            <Route component={Notfound} /> */}
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
