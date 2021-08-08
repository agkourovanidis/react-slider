import React from "react";
import "./ReactSlider.css";
// import leftArrow from "./icons/left-arrow.svg";
// import rightArrow from "./icons/right-arrow.svg";
import leftArrow from '../../img/left-arrow.svg'
import rightArrow from '../../img/right-arrow.svg'

export default function BtnSlider({ direction, moveSlide }) {
  // console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt=''/>
    </button>
  );
}