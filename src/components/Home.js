import React, { Component } from 'react'
import M from 'materialize-css'

class Home extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, { indicators: true, fullWidth: true });
        });

    }

    render() {
        return (
            <div>
                <div class="carousel row carousel-slider">
                    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1" /></a>
                    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2" /></a>
                    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3" /></a>
                    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4" /></a>
                </div>
                <div class="row">
                    <div className="row">
                        <div className="col s12 m4 l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="https://materializecss.com/images/sample-1.jpg" className="img-responsive" />
                                    <span className="card-title">Card Title</span>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home
