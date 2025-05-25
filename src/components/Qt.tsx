import * as React from "react";
import type { SVGProps } from "react";
const Qt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 43"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="#0c0" d="M1 42V10l9-9h43v33l-9 9z" />
    <text x={9} y={32} fill="#FFF" fontFamily="Arial" fontSize={32}>
      {"Qt"}
    </text>
  </svg>
);
export default Qt;
