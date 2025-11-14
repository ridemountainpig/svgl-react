import * as React from "react";
import type { SVGProps } from "react";
const Paper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 39 39"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="#81ADEC" d="M39 24H24V6H6v18h18v15H0V6h6V0h33z" />
  </svg>
);
export default Paper;
