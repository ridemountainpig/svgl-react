import * as React from "react";
import type { SVGProps } from "react";
const Connect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#Connect__a)">
      <path
        fill="#00261A"
        d="M26.333 0H5.667A5.667 5.667 0 0 0 0 5.667v19.866A5.667 5.667 0 0 0 5.667 31.2h20.666A5.667 5.667 0 0 0 32 25.533V5.667A5.667 5.667 0 0 0 26.333 0"
      />
      <path
        fill="#52CCA3"
        d="M13.249 18.378h-5.9v5.9h5.9zM24.077 18.983h-4.686v4.687h4.686zM24.077 7.528h-4.686v4.687h4.686zM12.643 7.55H7.957v4.686h4.686z"
      />
      <path
        fill="#CAFCEB"
        d="M24.077 7.528v4.684l-9.46 4.793 4.776-9.477h4.684m.604-.605h-5.66L13.25 18.379l11.434-5.794V6.923z"
      />
      <path
        fill="#CAFCEB"
        d="M24.077 18.983v4.688H19.4l-4.689-4.688zm.606-.605H13.249l5.9 5.9h5.534zM12.643 7.55v9.366l-4.688-4.689V7.551zm.605-.605H7.35v5.535l5.899 5.898V6.944z"
      />
    </g>
    <defs>
      <clipPath id="Connect__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Connect;
