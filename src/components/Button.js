import React from "react";
import styled, {css} from "styled-components";

const StyledButton = styled.button`
  background-color: #6C52EE;
  background-size: 100% 100%;
  background-clip: content-box;
  background-repeat: no-repeat;
  background-position: 0;
  border: none;
  font-size: 1.125em;
  max-width: 100%;
  height: 3.389em;
  cursor: pointer;
  transition: transform 0.23s ease;
  padding: 0 2.778em;
  position: relative;
  user-select: none;
  width: 23.3em;
  will-change: filter;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  
  &:hover {
    transform: scale(1.01);
  }
  
  span {
    position: relative;
    z-index: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-widht: 100%;
    display: block;
  }

${props => props.outline && css`
    mask-image: linear-gradient(to right, ${props => props.color || '#6C52EE'}, ${props => props.color || '#6C52EE'}), linear-gradient(to right, ${props => props.color || '#6C52EE'}, ${props => props.color || '#6C52EE'});  
    color: ${props => props.color || '#6C52EE'};
    background-color: transparent;
    background-position: top, bottom;
    background-size: calc(100% - 5.556em) 1px;
    background-clip: border-box;
    
    &:after {
      background-position: right;
      right: 0;
    }
  
    &:before {
      background-position: left;
      left: 0;
    }
    
    &::before,
    &::after {
      background-image: url("data:image/svg+xml,%3Csvg width='420' height='61' preserveAspectRatio='none' viewBox='0 0 420 61' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1_2_2' fill='white'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 61C4.47715 61 0 56.5229 0 51V24.1184C0 20.7624 1.68339 17.6302 4.48225 15.7785L25.8218 1.66007C27.4583 0.577328 29.3773 0 31.3395 0H410C415.523 0 420 4.47715 420 10V38.0704C420 41.4263 418.317 44.5586 415.518 46.4103L395.975 59.3399C394.338 60.4227 392.42 61 390.457 61H10Z'/%3E%3C/mask%3E%3Cpath d='M395.975 59.3399L395.423 58.5059L395.975 59.3399ZM415.518 46.4103L416.07 47.2443L415.518 46.4103ZM-1 24.1184V51H1V24.1184H-1ZM25.27 0.826079L3.93048 14.9445L5.03403 16.6124L26.3736 2.49406L25.27 0.826079ZM410 -1H31.3395V1H410V-1ZM421 38.0704V10H419V38.0704H421ZM396.527 60.1739L416.07 47.2443L414.966 45.5763L395.423 58.5059L396.527 60.1739ZM10 62H390.457V60H10V62ZM395.423 58.5059C393.95 59.4804 392.223 60 390.457 60V62C392.616 62 394.727 61.3649 396.527 60.1739L395.423 58.5059ZM419 38.0704C419 41.0908 417.485 43.9097 414.966 45.5763L416.07 47.2443C419.148 45.2074 421 41.7619 421 38.0704H419ZM410 1C414.971 1 419 5.02944 419 10H421C421 3.92487 416.075 -1 410 -1V1ZM26.3736 2.49406C27.8464 1.5196 29.5735 1 31.3395 1V-1C29.181 -1 27.0702 -0.364939 25.27 0.826079L26.3736 2.49406ZM-1 51C-1 57.0751 3.92487 62 10 62V60C5.02944 60 1 55.9706 1 51H-1ZM1 24.1184C1 21.098 2.51505 18.279 5.03403 16.6124L3.93048 14.9445C0.851731 16.9814 -1 20.4268 -1 24.1184H1Z' fill='${props => props.color ? props.color.replace('#', '%23') : '%236C52EE'}' mask='url(%23path-1-inside-1_2_2)'/%3E%3Cmask id='mask0_2_2' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='420' height='61'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 61C4.47715 61 0 56.5229 0 51V24.1184C0 20.7624 1.68339 17.6302 4.48225 15.7785L25.8218 1.66007C27.4583 0.577328 29.3773 0 31.3395 0H410C415.523 0 420 4.47715 420 10V38.0704C420 41.4263 418.317 44.5586 415.518 46.4103L395.975 59.3399C394.338 60.4227 392.42 61 390.457 61H10Z' fill='${props => props.color ? props.color.replace('#', '%23') : '%236C52EE'}'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_2_2)'%3E%3C/g%3E%3C/svg%3E%0A");          
      background-color: transparent;
      top: -1px;
      bottom: -1px;
      background-repeat: no-repeat;
      content: '';
      width: 50%;
      position: absolute;
    }
`}

${props => !props.outline && css`
  color: ${props => props.color || '#fff'};
  filter: drop-shadow(0px 0px 25px rgba(108,82,238,0.25));
  
  &:before,
  &:after {
    mask-image: url("data:image/svg+xml,%3Csvg width='420' height='61' viewBox='0 0 420 61' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 61C4.47715 61 0 56.5229 0 51V24.1184C0 20.7624 1.68339 17.6302 4.48225 15.7785L25.8218 1.66007C27.4583 0.577328 29.3773 0 31.3395 0H410C415.523 0 420 4.47715 420 10V38.0704C420 41.4264 418.317 44.5586 415.518 46.4103L395.975 59.3399C394.338 60.4227 392.42 61 390.457 61H10Z' fill='%236C52EE'/%3E%3C/svg%3E%0A");
    background-image: url("data:image/svg+xml,%3Csvg width='315' height='291' viewBox='0 0 315 291' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_f_109_5)'%3E%3Cpath d='M213.696 159.816C210.156 183.224 181.926 195.834 150.643 187.983C119.36 180.131 96.8692 154.791 100.409 131.383C103.949 107.976 132.178 95.3649 163.462 103.216C194.745 111.068 217.235 136.408 213.696 159.816Z' fill='%23955EFC'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_109_5' x='0.0423584' y='0.883568' width='314.02' height='289.432' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='50' result='effect1_foregroundBlur_109_5'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A"),
      url("data:image/svg+xml,%3Csvg width='295' height='288' viewBox='0 0 295 288' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_f_1_2)'%3E%3Cpath d='M195 144C195 168.301 173.733 188 147.5 188C121.266 188 99.9999 168.301 99.9999 144C99.9999 119.699 121.266 100 147.5 100C173.733 100 195 119.699 195 144Z' fill='%236290FC'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_1_2' x='-0.000106812' y='0' width='295' height='288' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='50' result='effect1_foregroundBlur_1_2'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
    background-color: #6C52EE;
    content: '';
    background-repeat: no-repeat;
    width: 50%;
    top: 0;
    bottom: 0;
    position: absolute;
    max-width: 11.111em;
  }
  
  &:after {
    background-size: 16.667em auto, 0;
    mask-position: right;
    background-position: left center;
    right: 0;
  }

  &:before {
    background-size: 0, 16.667em auto;
    background-position: right center;
    left: 0;
  }
`}
`


const Button = ({children, ...props}) => {
  return <StyledButton {...props}>
    <span>{children}</span>
  </StyledButton>
}

export default Button;