/** @jsxRuntime classic */
/** @jsx jsx */
// import { css, jsx } from "@emotion/react";
import { jsx } from "@emotion/react";

// /** @jsx jsx */
// import { css, jsx } from '@emotion/core'
// import React, { useState, useEffect, useRef } from "react";
import { useState } from "react";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";

import "./Slider.css";

// /**
//  * @function Slider
//  */
const Slider = (props) => {
  // const getWidth = () => window.innerWidth
  // const getWidth = () => 300;
  const getWidth = () => (window.innerWidth > 850 ? 262 : 400);

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
    // if (activeIndex !== props.slides.length - 1) {
    //   return setState({
    //     ...state,
    //     activeIndex: activeIndex + 1,
    //     translate: (activeIndex + 1) * getWidth(),
    //   });
    // }
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
    // if (activeIndex !== 0) {
    //   return setState({
    //     ...state,
    //     activeIndex: activeIndex - 1,
    //     translate: (activeIndex - 1) * getWidth(),
    //   });
    // }
  };

  return (
    // <div css={SliderCSS} class="showhim">
    <div className="slider">
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <div className="showme">
        <Arrow direction="left" handleClick={prevSlide} />
        <Arrow direction="right" handleClick={nextSlide} />

        <Dots slides={props.slides} activeSlide={activeIndex} />
      </div>
    </div>
  );
};

// const SliderCSS = css`
//   position: relative;
//   height: 220px;
//   width: 440px;
//   // height: 100vh;
//   // width: 100vw;
//   margin: 0 auto;
//   overflow: hidden;
// `;

export default Slider;
