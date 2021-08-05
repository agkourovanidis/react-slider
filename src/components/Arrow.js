/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
// /** @jsx jsx */
// import { css, jsx } from '@emotion/core'

// import React, { memo } from 'react'
import { memo } from 'react'
import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      // className='arrow'
      css={css`
        display: flex;
        position: absolute;
        top: 45%;
        ${direction === 'right' ? `right: 15px` : `left: 15px`};
        height: 20px;
        width: 20px;
        justify-content: center;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        transition: transform ease-in 0.55s;
        opacity: 60%;
        transition: .55s opacity;
        // border: solid red 3px;

        &:hover {
          opacity: 90%;
          transform: scale(1.1);
        }
  
        img {
          width: 15px;
          height: 15px;
          transform: translateX(${direction === 'left' ? '-1' : '1'}px);
  
          &:focus {
            outline: 0;
          }
        }

        @media (max-width: 850px) {
          top: 45%;
          ${direction === 'right' ? `right: 25px` : `left: 25px`};
          height: 30px;
          width: 30px;
          // border: solid blue 3px;          
        // }

        img {
          width: 20px;
          height: 20px;

          transform: translateX(${direction === 'left' ? '-2' : '2'}px);
  
          // &:focus {
          //   outline: 0;
          // }
        }
      }
      `}
    >
      {direction === 'right' ? <img src={rightArrow} alt='' /> : <img src={leftArrow}  alt='' />}
    </div>
  )
}

export default memo(Arrow)