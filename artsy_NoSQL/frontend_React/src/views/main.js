import React from 'react';
import { Carousel } from 'react-bootstrap'

import '../css/index.css'


export function Main(){
    return(
        <div class="container">
        <section class="artsy-main">
            <C />
        </section>
        </div>
    );
}

function C(){
    return(
        <Carousel>
        <Carousel.Item interval={2000}>
        <img
            className="d-block w-100"
            src={"img/img1.jpg"}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
            className="d-block w-100"
            src={"img/img2.jpg"}
            alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
            className="d-block w-100"
            src={"img/img3.jpg"}
            alt="Third slide"
        />
        </Carousel.Item>
    </Carousel>
    );
}