import * as React from "react";
import type { SVGProps } from "react";
const PlanetScaleDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      fill="#fff"
      d="M256 128a128 128 0 0 1-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8q-10.95-4.95-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 0 1 128 0"
    />
  </svg>
);
export default PlanetScaleDark;
