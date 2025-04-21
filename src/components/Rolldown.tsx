import * as React from "react";
import type { SVGProps } from "react";
const Rolldown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 100 100"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="url(#prefix__a)"
      d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50"
    />
    <path
      fill="#fff"
      d="M85 45.64H72.514l1.924-2.608L60.642 43l-6.739 9.347H67l-5.785 8.738h-9.882l12 10.248 24-10.248H75.457zm-2.667-13.307h-14L66.411 35h13.954zM78.52 37.5H64.608L62.5 40.424h13.863zm-28.316 6.692q0 3.54-1.92 6.407-1.92 2.865-5.59 4.215L51.334 71H37.33l-6.888-14.107h-4.63V71H13.333V32.333h23.772q4.178 0 7.114 1.63 2.993 1.573 4.46 4.327 1.525 2.698 1.525 5.902m-12.704.505q0-1.517-1.017-2.529-1.015-1.011-2.484-1.011h-8.187v7.137h8.187q1.469 0 2.484-1.011 1.017-1.068 1.017-2.586"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={50}
        x2={50}
        y1={0}
        y2={100}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F0DB4F" />
        <stop offset={0.92} stopColor="#FF5D13" />
      </linearGradient>
    </defs>
  </svg>
);
export default Rolldown;
export const RolldownUrl = "https://rolldown.rs/";
