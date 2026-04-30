import * as React from "react";
import type { SVGProps } from "react";
const Trello = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 63 63"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <linearGradient id="Trello__a" x1="50.048%" x2="50.048%" y1="100%">
      <stop stopColor="#0052cc" />
      <stop offset={1} stopColor="#2684ff" />
    </linearGradient>
    <path
      fill="url(#Trello__a)"
      d="M55.59.07H8A7.42 7.42 0 0 0 .58 7.48V55A7.42 7.42 0 0 0 8 62.45h47.59A7.42 7.42 0 0 0 63 55V7.48A7.42 7.42 0 0 0 55.59.07M27.5 45a2.48 2.48 0 0 1-2.5 2.47H14.6A2.47 2.47 0 0 1 12.14 45V14.05a2.47 2.47 0 0 1 2.46-2.47H25a2.48 2.48 0 0 1 2.47 2.47zm24-14.21a2.47 2.47 0 0 1-2.5 2.47H38.6a2.48 2.48 0 0 1-2.47-2.47V14.05a2.48 2.48 0 0 1 2.47-2.47H49a2.47 2.47 0 0 1 2.46 2.47z"
    />
  </svg>
);
export default Trello;
