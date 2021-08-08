import React, { useState } from "react";
import "./ReactSlider.css";
import BtnSlider from "./BtnSlider";
// import dataSlider from "./dataSlider";

export default function ReactSlider(props) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== props.slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === props.slides.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(props.slides.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {props.slides.map((slideImage, index) => (
        <div
          key={index}
          className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
        >
          <img
            //   src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
            src={props.slides[slideIndex - 1]}
            alt=""
          />
        </div>
      ))}

      <div className="showme">
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {/* {Array.from({ length: 5 }).map((item, index) => ( */}
          {Array.from({ length: props.slides.length }).map((item, index) => (
            <div
              //// my
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
