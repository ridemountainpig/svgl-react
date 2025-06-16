import * as React from "react";
import type { SVGProps } from "react";
const Ubuntu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <circle cx={50} cy={50} r={45} fill="#f47421" />
    <circle
      cx={50}
      cy={50}
      r={21.8}
      fill="none"
      stroke="#fff"
      strokeWidth={8.6}
    />
    <g id="Ubuntu__a">
      <circle cx={19.4} cy={50} r={8.4} fill="#f47421" />
      <path stroke="#f47421" strokeWidth={3.2} d="M67 50h10" />
      <circle cx={19.4} cy={50} r={6} fill="#fff" />
    </g>
    <use xlinkHref="#Ubuntu__a" transform="rotate(120 50 50)" />
    <use xlinkHref="#Ubuntu__a" transform="rotate(240 50 50)" />
  </svg>
);
export default Ubuntu;
