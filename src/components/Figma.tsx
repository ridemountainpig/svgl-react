import * as React from "react";
import type { SVGProps } from "react";
const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 54 80"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <path
        fill="#0ACF83"
        d="M13.333 80c7.36 0 13.334-5.973 13.334-13.333V53.334H13.333C5.973 53.334 0 59.307 0 66.667S5.973 80 13.333 80"
      />
      <path
        fill="#A259FF"
        d="M0 40c0-7.36 5.973-13.333 13.333-13.333h13.334v26.666H13.333C5.973 53.333 0 47.36 0 40"
      />
      <path
        fill="#F24E1E"
        d="M0 13.333C0 5.973 5.973 0 13.333 0h13.334v26.667H13.333C5.973 26.667 0 20.693 0 13.333"
      />
      <path
        fill="#FF7262"
        d="M26.667 0H40c7.36 0 13.333 5.973 13.333 13.333S47.36 26.667 40 26.667H26.667z"
      />
      <path
        fill="#1ABCFE"
        d="M53.333 40c0 7.36-5.973 13.333-13.333 13.333S26.667 47.36 26.667 40 32.64 26.667 40 26.667 53.333 32.64 53.333 40"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h53.333v80H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Figma;
export const FigmaUrl = "https://www.figma.com/";
