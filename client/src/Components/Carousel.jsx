import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Grid from '@material-ui/core';

class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            testimonials: props.testimonials 
        };
      }

    render() {
        return (
            <Carousel>
                {this.state.testimonials.map(item => (
                    <div>
                        <img src="https://via.placeholder.com/150" alt='placeholder' />
                        <p className="legend">
                            {item}
                        </p>
                    </div>
                ))}
            </Carousel>
        );
    }
};


export default MyCarousel;