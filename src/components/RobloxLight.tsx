import * as React from "react";
import type { SVGProps } from "react";
const RobloxLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 564 115"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <mask
      id="prefix__a"
      width={512}
      height={95}
      x={26}
      y={10}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M26 10h512v94.72H26z" />
    </mask>
    <g mask="url(#prefix__a)">
      <path
        fill="#000"
        d="m87.73 71.45 14.73 26.97H75.13L62.68 75.37h-11.8v23.05H26V16.7h45.52c18.83 0 30.78 10.45 30.78 29.24 0 12.1-5.57 20.76-14.57 25.5zm-36.84-33.5v16.17h17.68c5.24 0 8.52-3.1 8.52-8.17 0-5.06-3.28-8-8.52-8H50.9zm130.66 66.51-74.5-20.1L127.03 10l37.24 10.05 37.25 10.05zm-14.08-54.75L146.67 44l-5.56 20.76 20.79 5.72 5.57-20.76zm119.36 25.66c0 15.69-9.99 23.05-25.54 23.05h-48.8V16.7h47.16c15.56 0 25.54 8 25.54 22.06 0 8.83-3.27 14.71-9.5 18.8 7.05 3.1 11.14 9.3 11.14 17.8zm-50.1-39.05v12.1h16.2c4.42 0 7.04-1.97 7.04-6.22 0-3.92-2.62-5.88-7.04-5.88zm0 42.49h18.17c4.26 0 6.72-2.29 6.72-6.21 0-4.25-2.45-6.21-6.72-6.21h-18.17V78.8zm62.38-62.1h24.88v57.52h35.7v24.19H299.1V16.71zm152.11 40.86a42.43 42.43 0 0 1-26.28 39.25 42.64 42.64 0 0 1-46.4-9.21 42.46 42.46 0 0 1 30.1-72.53 42.56 42.56 0 0 1 30.13 12.41 42.38 42.38 0 0 1 12.45 30.07zm-24.89 0c0-10.14-8.02-18.15-17.68-18.15s-17.69 8.01-17.69 18.15c0 10.13 8.03 18.14 17.69 18.14s17.68-8.02 17.68-18.15zm84.82-1.31L538 98.42h-29.64l-14.73-24.03-15.23 24.03h-30.13l28-41.18-25.7-40.53h29.63l13.59 22.06 13.1-22.06h29.47z"
      />
    </g>
  </svg>
);
export default RobloxLight;
