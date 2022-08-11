import React from "react";
import styled, {css} from "styled-components";

import {ReactComponent as ButtonRectangle} from '../images/svg/ButtonRectangle.svg'

const StyledButton = styled.button`
  background-image: url("data:image/svg+xml,%3Csvg width='420' height='61' preserveAspectRatio='none' viewBox='0 0 420 61' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 61C4.47715 61 0 56.5229 0 51V24.1184C0 20.7624 1.68339 17.6302 4.48225 15.7785L25.8218 1.66007C27.4583 0.577328 29.3773 0 31.3395 0H410C415.523 0 420 4.47715 420 10V38.0704C420 41.4264 418.317 44.5586 415.518 46.4103L395.975 59.3399C394.338 60.4227 392.42 61 390.457 61H10Z' fill='%236C52EE'/%3E%3Cmask id='mask0_1_2' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='420' height='61'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 61C4.47715 61 0 56.5229 0 51V24.1184C0 20.7624 1.68339 17.6302 4.48225 15.7785L25.8218 1.66007C27.4583 0.577328 29.3773 0 31.3395 0H410C415.523 0 420 4.47715 420 10V38.0704C420 41.4264 418.317 44.5586 415.518 46.4103L395.975 59.3399C394.338 60.4227 392.42 61 390.457 61H10Z' fill='%236C52EE'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1_2)'%3E%3Cg filter='url(%23filter0_f_1_2)'%3E%3Cpath d='M75 2C75 26.3005 53.7335 46 27.5 46C1.26647 46 -20 26.3005 -20 2C-20 -22.3005 1.26647 -42 27.5 -42C53.7335 -42 75 -22.3005 75 2Z' fill='%236290FC'/%3E%3C/g%3E%3Cg filter='url(%23filter1_f_1_2)'%3E%3Cpath d='M419.696 15.816C416.156 39.2236 387.926 51.8342 356.643 43.9827C325.36 36.1311 302.869 10.7906 306.409 -12.6169C309.949 -36.0244 338.178 -48.6351 369.462 -40.7835C400.745 -32.932 423.236 -7.5915 419.696 15.816Z' fill='%23955EFC'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_1_2' x='-120' y='-142' width='295' height='288' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='50' result='effect1_foregroundBlur_1_2'/%3E%3C/filter%3E%3Cfilter id='filter1_f_1_2' x='206.042' y='-143.116' width='314.02' height='289.432' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='50' result='effect1_foregroundBlur_1_2'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
  background-color: transparent;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  color: ${props => props.color || '#fff'};
  filter: drop-shadow(0px 0px 25px rgba(108,82,238,0.25));
  border: none;
  font-size: 16px;
  max-width: 420px;
  height: 60px;
  cursor: pointer;
  transition: transform 0.23s ease;
  padding: 0.5em 2em;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  will-change: filter;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    transform: scale(1.01);
  }

${props => props.outline && css `
  background-image: url("data:image/svg+xml,%3Csvg width='420' height='61' preserveAspectRatio='none' viewBox='0 0 420 61' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1_2_2' fill='white'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 61C4.47715 61 0 56.5229 0 51V24.1184C0 20.7624 1.68339 17.6302 4.48225 15.7785L25.8218 1.66007C27.4583 0.577328 29.3773 0 31.3395 0H410C415.523 0 420 4.47715 420 10V38.0704C420 41.4263 418.317 44.5586 415.518 46.4103L395.975 59.3399C394.338 60.4227 392.42 61 390.457 61H10Z'/%3E%3C/mask%3E%3Cpath d='M395.975 59.3399L395.423 58.5059L395.975 59.3399ZM415.518 46.4103L416.07 47.2443L415.518 46.4103ZM-1 24.1184V51H1V24.1184H-1ZM25.27 0.826079L3.93048 14.9445L5.03403 16.6124L26.3736 2.49406L25.27 0.826079ZM410 -1H31.3395V1H410V-1ZM421 38.0704V10H419V38.0704H421ZM396.527 60.1739L416.07 47.2443L414.966 45.5763L395.423 58.5059L396.527 60.1739ZM10 62H390.457V60H10V62ZM395.423 58.5059C393.95 59.4804 392.223 60 390.457 60V62C392.616 62 394.727 61.3649 396.527 60.1739L395.423 58.5059ZM419 38.0704C419 41.0908 417.485 43.9097 414.966 45.5763L416.07 47.2443C419.148 45.2074 421 41.7619 421 38.0704H419ZM410 1C414.971 1 419 5.02944 419 10H421C421 3.92487 416.075 -1 410 -1V1ZM26.3736 2.49406C27.8464 1.5196 29.5735 1 31.3395 1V-1C29.181 -1 27.0702 -0.364939 25.27 0.826079L26.3736 2.49406ZM-1 51C-1 57.0751 3.92487 62 10 62V60C5.02944 60 1 55.9706 1 51H-1ZM1 24.1184C1 21.098 2.51505 18.279 5.03403 16.6124L3.93048 14.9445C0.851731 16.9814 -1 20.4268 -1 24.1184H1Z' fill='${props => props.color ? props.color.replace('#', '%23') : '%236C52EE'}' mask='url(%23path-1-inside-1_2_2)'/%3E%3Cmask id='mask0_2_2' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='420' height='61'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 61C4.47715 61 0 56.5229 0 51V24.1184C0 20.7624 1.68339 17.6302 4.48225 15.7785L25.8218 1.66007C27.4583 0.577328 29.3773 0 31.3395 0H410C415.523 0 420 4.47715 420 10V38.0704C420 41.4263 418.317 44.5586 415.518 46.4103L395.975 59.3399C394.338 60.4227 392.42 61 390.457 61H10Z' fill='${props => props.color ? props.color.replace('#', '%23') : '%236C52EE'}'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_2_2)'%3E%3C/g%3E%3C/svg%3E%0A");
  color: ${props => props.color || '#6C52EE'};
`}

`


const Button = (props) => {
  return <StyledButton {...props} />
}

export default Button;