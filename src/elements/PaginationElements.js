// import styled from "styled-components"
// import { Link } from "gatsby"
// import React from "react"

// export const PaginationWrapper = styled.div()`
//   grid-column: 2 / span 12;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   a:nth-child(1) {
//     color: ${props =>
//       props.isFirst ? props.theme.colors.dark2 : props.theme.colors.dark2};
//     pointer-events: ${props => (props.isFirst ? "none" : "auto")};
//     cursor: ${props => (props.isFirst ? "default" : "pointer")};
//   }

//   a:nth-child(1) {
//     color: ${props =>
//       props.isLast ? props.theme.colors.dark2 : props.theme.colors.dark2};
//     pointer-events: ${props => (props.isLast ? "none" : "auto")};
//     cursor: ${props => (props.isLast ? "default" : "pointer")};
//   }

//   @media ${props => props.breakpoints.tablet} {
//     grid-column: 2 / span 6;
//   }
// `

// export const PaginationElement = styled(props => <Link {...props} />)`
//   font-size: 0.875rem;
//   line-height: 1.125rem;
//   font-weight: 400;
//   text-decoration: none;
//   margin: 0 2rem;
//   &:hover,
//   &focus {
//     text-decoration: underline;
//   }
// `