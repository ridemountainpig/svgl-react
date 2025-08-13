import * as React from "react";
import type { SVGProps } from "react";
const PlainSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <rect width={64} height={64} fill="#FFF" rx={8} />
      <circle cx={32} cy={32} r={24} fill="#2463EB" fillRule="nonzero" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="m45.886 20 3.428.667c.557 1.093.557 1.093.686 2.666a36 36 0 0 1-3.428 3.834l-2.114 2.148-1.046 1.05a98 98 0 0 0-3.483 3.76 856 856 0 0 1-7.757 8.542c-2.51-.39-3.802-1.39-5.657-3.042l-1.468-1.294-1.103-.998c-2.362.966-3.676 2.185-5.314 4.084l-1.275 1.463L16.4 44c-1.7-.64-2.558-.975-3.388-2.591-.04-1.409-.04-1.409.798-2.672l1.262-1.279 1.334-1.388 1.366-1.403Q18.96 33.34 20.13 32l1.757-2c2.51.39 3.802 1.389 5.657 3.042l1.468 1.294 1.103.997c1.998-.87 3.342-1.771 4.816-3.34l1.136-1.2 1.162-1.251 1.146-1.213c2.566-2.726 5.05-5.513 7.51-8.329"
      />
    </g>
  </svg>
);
export default PlainSignal;
