import * as React from "react";
import type { SVGProps } from "react";
const TurborepoLight = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#000"
      d="M49.96 17.482C32.046 17.482 17.47 32.07 17.47 50s14.575 32.518 32.49 32.518S82.452 67.93 82.452 50 67.877 17.482 49.961 17.482Zm0 49.346c-9.287 0-16.814-7.533-16.814-16.828s7.527-16.828 16.815-16.828S66.776 40.705 66.776 50s-7.527 16.828-16.815 16.828Z"
    />
    <path
      fill="url(#TurborepoLight__a)"
      fillRule="evenodd"
      d="M52.683 12.141V0C79.053 1.41 100 23.26 100 50s-20.948 48.583-47.317 50V87.859C72.336 86.454 87.898 70.019 87.898 50S72.336 13.546 52.683 12.141M21.305 74.827c-5.21-6.019-8.568-13.685-9.167-22.102H0C.63 64.503 5.337 75.19 12.713 83.42l8.586-8.593zM47.237 100V87.859c-8.417-.6-16.077-3.954-22.091-9.174l-8.586 8.593C24.79 94.665 35.469 99.37 47.23 100z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="TurborepoLight__a"
        x1={54.644}
        x2={5.425}
        y1={7.031}
        y2={56.211}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF" />
        <stop offset={1} stopColor="#FF1E56" />
      </linearGradient>
    </defs>
  </svg>
);
export default TurborepoLight;
