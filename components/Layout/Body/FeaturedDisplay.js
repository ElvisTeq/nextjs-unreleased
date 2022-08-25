import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import classes from "./FeaturedDisplay.module.css";

const FeaturedDisplay = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={classes.main}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src="PKM.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Pokemon Violet</h3>
            <p>Releasing Soon</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Scarlet.avif"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Pokemon Scarlet</h3>
            <p>Releasing Soon</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FeaturedDisplay;
