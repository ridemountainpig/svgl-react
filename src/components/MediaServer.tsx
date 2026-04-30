import * as React from "react";
import type { SVGProps } from "react";
const MediaServer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g clipPath="url(#MediaServer__a)">
      <path fill="#EAEAEA" d="M0 0v31.2h32V0z" />
      <path
        fill="#EC1C24"
        d="m9.613 15.68 3.467-3.333 3.32 3.333-3.387 3.36zm9.68-.187-4.813-4.76 1.64-1.693 6.48 6.52-6.547 6.52-1.68-1.667zM17.64 7.587l1.52-1.507 9.64 9.613-9.587 9.574-1.68-1.707 8.107-8zm-1.627-4.654 1.747 1.734L6.573 15.613 17.707 26.76l-1.774 1.773L3.2 15.68z"
      />
    </g>
    <defs>
      <clipPath id="MediaServer__a">
        <path fill="#fff" d="M0 0h32v31.2H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default MediaServer;
