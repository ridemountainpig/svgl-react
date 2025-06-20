import * as React from "react";
import type { SVGProps } from "react";
const Steam = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="#fff"
    viewBox="0 0 65 65"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <use xlinkHref="#Steam__a" x={0.5} y={0.5} />
    <defs>
      <linearGradient id="Steam__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#111d2e" />
        <stop offset="21.2%" stopColor="#051839" />
        <stop offset="40.7%" stopColor="#0a1b48" />
        <stop offset="58.1%" stopColor="#132e62" />
        <stop offset="73.8%" stopColor="#144b7e" />
        <stop offset="87.3%" stopColor="#136497" />
        <stop offset="100%" stopColor="#1387b8" />
      </linearGradient>
    </defs>
    <symbol id="Steam__a">
      <path
        fill="url(#Steam__b)"
        d="M1.305 41.202C5.259 54.386 17.488 64 31.959 64c17.673 0 32-14.327 32-32s-14.327-32-32-32C15.001 0 1.124 13.193.028 29.874c2.074 3.477 2.879 5.628 1.275 11.328z"
      />
      <path d="m30.31 23.985.003.158-7.83 11.375a8.8 8.8 0 0 0-3.748.662 8 8 0 0 0-1.498.8L.042 29.893s-.398 6.546 1.26 11.424l12.156 5.016a8.84 8.84 0 0 0 5.242 6.27 8.88 8.88 0 0 0 11.603-4.782 8.9 8.9 0 0 0 .684-3.656L42.18 36.16l.275.005c6.705 0 12.155-5.466 12.155-12.18s-5.44-12.16-12.155-12.174c-6.702 0-12.155 5.46-12.155 12.174zm-1.88 23.05a6.844 6.844 0 0 1-8.953 3.694 6.84 6.84 0 0 1-3.524-3.362l3.957 1.64a5.04 5.04 0 0 0 6.591-2.719 5.05 5.05 0 0 0-2.715-6.601l-4.1-1.695a6.8 6.8 0 0 1 5.05.077c1.7.703 3 2.027 3.696 3.72s.692 3.56-.01 5.246M42.466 32.1a8.12 8.12 0 0 1-8.098-8.113 8.12 8.12 0 0 1 8.098-8.111 8.12 8.12 0 0 1 8.1 8.111 8.12 8.12 0 0 1-8.1 8.113m-6.068-8.126a6.09 6.09 0 0 1 6.08-6.095c3.355 0 6.084 2.73 6.084 6.095a6.09 6.09 0 0 1-6.084 6.093 6.09 6.09 0 0 1-6.081-6.093z" />
    </symbol>
  </svg>
);
export default Steam;
