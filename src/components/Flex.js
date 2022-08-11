import React from "react";
import styled, {css} from "styled-components";

//import ButtonRectange from 'public/images/svg/buttonRectangle.svg'

const StyledFlex = styled.div`
 display: flex;
 flex-direction: ${props => props.direction || 'row'};
 align-items: ${props => props.alignItems || 'flex-start'};
 justify-content: ${props => props.justify || 'flex-start'};
 column-gap: ${props => props.columnGap || '0px'};
 row-gap: ${props => props.rowGap || '0px'};
 margin: ${props => props.margin || '0'};
`


const Flex = (props) => {
  
  return <StyledFlex {...props} />
}

export default Flex;