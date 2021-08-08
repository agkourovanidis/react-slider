// import styled from '@emotion/styled'

// const SliderContentNEW = styled.div`
//   transform: translateX(-${props => props.translate}px);
//   transition: transform ease-out ${props => props.transition}s;
//   height: 100%;
//   width: ${props => props.width}px;
//   display: flex;
// `
// export default SliderContentNEW

//// lsn-03
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const SliderContentNEW = props => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      height: 100%;
      width: ${props.width}px;
      display: flex;
    `}
  >
    {props.children}
  </div>
)

export default SliderContentNEW