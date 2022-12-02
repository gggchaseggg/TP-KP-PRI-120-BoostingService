import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "./img/carousel_1.jpg";
import carousel2 from "./img/carousel_2.jpg";

function Carouselbox() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="w-100"
                        src={carousel1}
                        alt="Carousel1" />
                    <Carousel.Caption>
                        <h2>АААААААААААААААААААА</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100"
                        src={carousel2}
                        alt="Carousel2" />
                    <Carousel.Caption>
                        <h2>ИИИИИИИИИИИИИИИИИИи</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100"
                        src={carousel1}
                        alt="Carousel1" />
                    <Carousel.Caption>
                        <h2>АААААААААААААААААААА</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
    }
export default Carouselbox;