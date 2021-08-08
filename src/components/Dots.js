/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
// /** @jsx jsx */
// import { css, jsx } from '@emotion/core'

// import React, { memo } from 'react'
import { memo } from 'react'

const Dot = ({ active }) => {
  return (
    <span
      css={css`
        // padding: 3px;
        padding: ${active ? '4px' : '3px'};
        margin-right: 5px;
        // cursor: pointer;
        border-radius: 50%;
        background: ${active ? 'white' : 'rgb(192, 192, 192)'};
        opacity: ${active ? '90%' : '50%'};
      `}
    />
  )
}

const MemoDot = memo(Dot)

const Dots = ({ slides, activeSlide }) => {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 15px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} />
      ))}
    </div>
  )
}

export default Dots