import * as React from "react";
import type { SVGProps } from "react";
const RadiusLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 560 560"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#111"
      fillRule="evenodd"
      d="M560 140h-70c0 71.3-21.4 137.7-58 193l128 128-99 99-128-128a348 348 0 0 1-193 58v70H0V140h140V0h420zm-420 0v210c116 0 210-94 210-210z"
      clipRule="evenodd"
    />
  </svg>
);
export default RadiusLight;
