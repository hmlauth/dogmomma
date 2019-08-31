import React, { Fragment } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';

function App() {
  return (
   <Fragment>
      <NavBar />
      <Home />
   </Fragment>
  );
}

export default App;


{/* <Route path="/About" component={HomePage} /> */}


// import Home from './Components/Pages/Home';
// import About from './Components/Pages/About';
// import Services from './Components/Pages/Services';
// import Testimonials from './Components/Pages/Testimonials';
// import Contact from './Components/Pages/Contact';
// import { Router, Route } from "react-router-dom";
// <Route exact path="/" component={Home} />
// <Route exact path="/About" component={About} />
// <Route exact path="/Services" component={Services} />
// <Route exact path="/Testimonials" component={Testimonials} />
// <Route exact path="/Contact" component={Contact} />