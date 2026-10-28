import * as React from "react";
import type { SVGProps } from "react";
const PiDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 560 560"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="#f6f6f6" d="M420 280H280V140H0V0h420zm140 280H420V280h140z" />
    <path fill="#f6f6f6" d="M140 560H0V140h140v140h140v140H140z" />
  </svg>
);
export default PiDark;
