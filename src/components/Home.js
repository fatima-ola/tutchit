import React, { Component } from 'react'
import M from 'materialize-css'

class Home extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {});
        });

    }

    render() {
        return (
            <div>
                <div class="carousel carousel-slider">
                    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1" /></a>
                    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2" /></a>
                    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3" /></a>
                    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4" /></a>
                </div>

            </div>
        )
    }
}

export default Home
