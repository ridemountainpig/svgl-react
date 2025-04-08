import * as React from "react";
import type { SVGProps } from "react";
const RefineLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 120 120"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fill="#14141F"
      fillRule="evenodd"
      d="M68.944 2.111a20 20 0 0 0-17.888 0l-40 20A20 20 0 0 0 0 40v40a20 20 0 0 0 11.056 17.888l40 20.001a20 20 0 0 0 17.888 0l40-20A20 20 0 0 0 120 80V40a20 20 0 0 0-11.056-17.888zM40 40c0-11.046 8.954-20 20-20s20 8.954 20 20v40c0 11.046-8.954 20-20 20s-20-8.954-20-20z"
      clipRule="evenodd"
    />
    <path
      fill="#14141F"
      d="M70 40c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10"
    />
  </svg>
);
export default RefineLight;
