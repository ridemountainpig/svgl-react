import * as React from "react";
import type { SVGProps } from "react";
const Flutter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 256 317"
    width="100%"
    height="100%"
    {...props}
  >
    <defs>
      <linearGradient id="prefix__a" x1="4%" x2="75.9%" y1="27%" y2="52.9%">
        <stop offset="0%" />
        <stop offset="100%" stopOpacity={0} />
      </linearGradient>
    </defs>
    <path
      fill="#47C5FB"
      d="M158 0 0 158l49 48L255 0zm-1 145-85 85 49 50 49-49 85-86z"
    />
    <path fill="#00569E" d="m121 280 37 37h97l-85-86z" />
    <path fill="#00B5F8" d="m72 230 48-48 50 49-49 49z" />
    <path fill="url(#prefix__a)" fillOpacity={0.8} d="m121 280 41-14 4-31z" />
  </svg>
);
export default Flutter;
