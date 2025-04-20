import * as React from "react";
import type { SVGProps } from "react";
const Lightroom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 83 80"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <path
        fill="#001E36"
        d="M67.521 0H14.53C6.505 0 0 6.505 0 14.53v50.94C0 73.495 6.505 80 14.53 80H67.52c8.025 0 14.53-6.505 14.53-14.53V14.53C82.051 6.505 75.546 0 67.521 0"
      />
      <path
        fill="#31A8FF"
        d="M43.09 56.541H21.405q-.55 0-.55-.605V20.984a.438.438 0 0 1 .495-.496h6.715a.34.34 0 0 1 .385.386v28.732h15.798q.495 0 .385.495l-.99 5.945a.53.53 0 0 1-.221.413.7.7 0 0 1-.33.082M48.54 29.185h6a.75.75 0 0 1 .715.55c.13.242.223.502.275.771q.115.532.165 1.074.055.578.055 1.238a12.9 12.9 0 0 1 3.66-2.945 10.3 10.3 0 0 1 5.092-1.238.438.438 0 0 1 .495.495v6.66q0 .387-.55.386a13.9 13.9 0 0 0-6.468 1.156 5.8 5.8 0 0 0-1.844 1.265v17.45q0 .495-.44.495h-6.66a.486.486 0 0 1-.55-.551V37.056a125 125 0 0 0-.11-5.229 17.5 17.5 0 0 0-.22-2.257.317.317 0 0 1 .384-.385"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h82.051v80H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Lightroom;
export const LightroomUrl =
  "https://www.adobe.com/products/photoshop-lightroom";
