import * as React from "react";
import type { SVGProps } from "react";
const GlideLight = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#202124"
      d="M0 55 55 0v27c0 15.464-12.536 28-28 28zM45 73c0-15.464 12.536-28 28-28h27l-55 55z"
    />
  </svg>
);
export default GlideLight;
