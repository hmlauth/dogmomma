import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class MyCarousel extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            testimonials: props.testimonials 
        };
        // this.handleClick = this.handleClick.bind(this);
      }

      componentDidMount() {
          console.log('mounted', this.state)
      }

    render() {
        return (
            <Carousel>
                {this.state.testimonials.map(item => (
                    <div>
                        <img src="https://via.placeholder.com/150" />
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