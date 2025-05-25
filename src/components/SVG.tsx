import * as React from "react";
import type { SVGProps } from "react";
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 300 300"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g stroke="#000" strokeWidth={38.009}>
      <g id="prefix__b" transform="translate(150 150)">
        <path
          id="prefix__a"
          fill="#ffb13b"
          d="M-84.149-15.851a22.417 22.417 0 1 0 0 31.702H84.15a22.417 22.417 0 1 0 0-31.702Z"
        />
        <use xlinkHref="#prefix__a" transform="rotate(45)" />
        <use xlinkHref="#prefix__a" transform="rotate(90)" />
        <use xlinkHref="#prefix__a" transform="rotate(135)" />
      </g>
    </g>
    <use xlinkHref="#prefix__b" />
  </svg>
);
export default SVG;
