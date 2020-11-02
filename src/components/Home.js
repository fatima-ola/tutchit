import React, { Component } from 'react'
import M from 'materialize-css'

class Home extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(
                elems, {
                indicators: true,
                fullWidth: true
            });
            var instance2 = M.AutoInit();
        });

    }

    render() {
        return (
            <div className="fixed">
                <div class="carousel row carousel-slider">
                    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/800/600/food/1" /></a>
                    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/600/food/2" /></a>
                    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/600/food/3" /></a>
                    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/600/food/6" /></a>
                </div>

                <div className="row container">
                    <div className="col s6 m6 l3">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://materializecss.com/images/sample-1.jpg" alt="1" className="circle responsive-img" />
                                <span className="card-title">Web Design Training</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s6 m6 l3">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://materializecss.com/images/sample-1.jpg" alt="2" className="circle responsive-img" />
                                <span className="card-title">Animation</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s6 m6 l3">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://materializecss.com/images/sample-1.jpg" alt="3" className="circle responsive-img" />
                                <span className="card-title">Android development</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s6 m6 l3">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://materializecss.com/images/sample-1.jpg" alt="4" className="circle responsive-img" />
                                <span className="card-title">Web Development</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Home
