/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

// import React from 'react'

import "./Slide.css";

const Slide = ({ content }) => (
  <div
    className="slide"
    css={css`background-image: url("${content}");`}
  />
);

export default Slide;
