/** @jsxRuntime classic */
/** @jsx jsx */
// import { css, jsx } from "@emotion/react";
import { jsx } from "@emotion/react";

// /** @jsx jsx */
// import { css, jsx } from '@emotion/core'
// import React, { useState, useEffect, useRef } from "react";
import { useState, useEffect, useRef } from "react";
import SliderContent from "./SliderContentNEW";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";

import "./Slider.css";

// const getWidth = () => window.innerWidth
// const getWidth = () => 300;
const getWidth = () => (window.innerWidth > 850 ? 262 : 400);

// /**
//  * @function SliderNEW
//  */
const SliderNEW = props => {
  const { slides } = props

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    transitioning: false,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, _slides, transition, transitioning } = state

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()
  // const sliderRef = useRef()
  // const throttleRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
    // throttleRef.current = throttleArrows
  })

  useEffect(() => {
    // const slider = sliderRef.current

    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current()
      }
    }

    const resize = () => {
      resizeRef.current()
    }

    // const throttle = () => {
    //   throttleRef.current()
    // }

    // const transitionStart = slider.addEventListener('transitionstart', throttle)
    // const transitionEnd = slider.addEventListener('transitionend', smooth)
    // const transitionStart = window.addEventListener('transitionstart', throttle)
    const transitionEnd = window.addEventListener('transitionend', smooth)

    const onResize = window.addEventListener('resize', resize)

    return () => {
      // slider.removeEventListener('transitionend', transitionStart)
      // slider.removeEventListener('transitionend', transitionEnd)
      // window.removeEventListener('transitionend', transitionStart)
      window.removeEventListener('transitionend', transitionEnd)

      window.removeEventListener('resize', onResize)    
    }
  }, [])

  useEffect(() => {
    const play = () => {
        autoPlayRef.current();
    }
  
    let interval = null
    
    if (props.autoPlay) {
        interval = setInterval(play, props.autoPlay * 1000);
    }
    
    return () => {
        if (props.autoPlay) {
            clearInterval(interval);
        }
    };
  // }, [activeSlide])
}, [props.autoPlay])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45, transitioning: false })
  }, [transition, state])

  // const throttleArrows = () => {
  //   setState({...state, transitioning: true })
  // } 

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const nextSlide = () => {
    if(transitioning) return

    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })
  }

  const prevSlide = () => {
    if(transitioning) return

    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })
  }

  const smoothTransition = () => {
    let _slides = []

    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    })
  }

  return (
    // <div css={SliderCSS} class="showhim">
    <div className="slider">
      <SliderContent
        translate={translate}
        transition={transition}
        // width={getWidth() * props.slides.length}
        // lsn 03
        width={getWidth() * _slides.length}
      >
        {/* {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))} */}
        {/* lsn 03 */}
        {_slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <div className="showme">
        <Arrow direction="left" handleClick={prevSlide} />
        <Arrow direction="right" handleClick={nextSlide} />

        <Dots slides={props.slides} activeSlide={activeSlide} />
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

export default SliderNEW;
