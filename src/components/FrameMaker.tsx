import * as React from "react";
import type { SVGProps } from "react";
const FrameMaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#FrameMaker__a)">
      <path fill="#261A00" d="M30.667 1.333H1.333v28.534h29.334z" />
      <path
        fill="#FAAB18"
        fillRule="evenodd"
        d="M0 0v31.2h32V0zm1.333 1.333h29.334v28.534H1.333z"
        clipRule="evenodd"
      />
      <path
        fill="#FAAB18"
        fillRule="evenodd"
        d="M7.067 21.813c0 .134-.04.187-.147.187H4.813c-.106 0-.146-.04-.146-.173V7.88c0-.107.04-.147.146-.147h7.16c.134 0 .147.04.174.147l.213 1.813c.027.134-.04.174-.173.174h-5.12v4h4.693c.107 0 .107.026.107.146v1.827c0 .133-.04.147-.147.147H7.067zm16.56-10.546c1.573 0 3.573.706 3.573 3.84v6.706c0 .134-.04.174-.147.174h-1.96c-.106 0-.146-.067-.146-.174v-6.56c0-1.266-.48-1.96-1.787-1.96a4.4 4.4 0 0 0-1.613.307c.133.387.186.92.186 1.48v6.733c0 .134-.04.174-.146.174H19.64c-.133 0-.173-.067-.173-.174v-6.56c0-1.266-.534-1.96-1.8-1.96-.587 0-.974.134-1.4.28v8.254c0 .093-.027.146-.134.146h-1.986c-.107 0-.147-.04-.147-.146v-8.214c0-.133 0-.586-.067-1.306 0-.107.04-.107.134-.147 1.053-.413 2.533-.907 4-.907.96 0 1.8.187 2.493.707.853-.347 1.8-.693 3.067-.693"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="FrameMaker__a">
        <path fill="#fff" d="M0 0h32v31.2H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FrameMaker;
