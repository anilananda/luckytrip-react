import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("../images/flightsunset.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../images/pexels-farhad-irani.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../images/pexels-gabriel-ramos.jpg"),
    caption: "",
    description: "",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval="5000"
      id="home"
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={slide.image}
              alt="slider image"
              style={{ maxHeight: 433, maxWidth: "100%" }}
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HomeCarousel;
